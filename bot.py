import logging
import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from datetime import datetime, timedelta

# 🔑 Config (already filled with your values)
BOT_TOKEN = "8425289009:AAFDOrKGDH5WtcT6K52TNWXmpvcPN0nsyLw"
CHANNEL_ID = -1002821416840
ADMIN_ID = 6371026239

# Global storage (in-memory for demo; use DB for production)
user_access = {}
current_link = "https://example.com/start"  # default, admin can update

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ---------------- Commands ----------------

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Send 5-day access link when user starts."""
    user_id = update.effective_user.id

    # Save access expiry (5 days later)
    expire_time = datetime.now() + timedelta(days=5)
    user_access[user_id] = expire_time

    # Send access link
    keyboard = [[InlineKeyboardButton("Get 5 Days Access", url=current_link)]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "🎉 Here’s your premium channel access for 5 days!",
        reply_markup=reply_markup
    )

    # Add user to channel
    try:
        await context.bot.add_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
    except Exception as e:
        logger.warning(f"Could not add user {user_id} to channel: {e}")

async def setlink(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Admin command to update the link."""
    global current_link
    if update.effective_user.id != ADMIN_ID:
        return await update.message.reply_text("🚫 You are not allowed to do this.")

    if not context.args:
        return await update.message.reply_text("Usage: /setlink <new_link>")

    current_link = context.args[0]
    await update.message.reply_text(f"✅ Link updated to: {current_link}")

# ---------------- Scheduler ----------------

async def check_expired(context: ContextTypes.DEFAULT_TYPE):
    """Check users whose 5-day access expired."""
    now = datetime.now()
    expired_users = [uid for uid, expiry in user_access.items() if expiry <= now]

    for user_id in expired_users:
        try:
            # Remove from channel
            await context.bot.ban_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
            await context.bot.unban_chat_member(chat_id=CHANNEL_ID, user_id=user_id)

            # Notify user
            keyboard = [[InlineKeyboardButton("Renew Access", url=current_link)]]
            reply_markup = InlineKeyboardMarkup(keyboard)
            await context.bot.send_message(
                chat_id=user_id,
                text="⏳ Your 5-day premium access is over.\n"
                     "👉 Click below to renew and join again:",
                reply_markup=reply_markup
            )
        except Exception as e:
            logger.warning(f"Error removing user {user_id}: {e}")

        # Remove from tracking
        del user_access[user_id]

# ---------------- Main ----------------

def main():
    application = Application.builder().token(BOT_TOKEN).build()

    # Handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("setlink", setlink))

    # Scheduler for expiry check
    scheduler = AsyncIOScheduler()
    scheduler.add_job(check_expired, "interval", minutes=1, args=[application.bot])
    scheduler.start()

    application.run_polling()

if __name__ == "__main__":
    main()
