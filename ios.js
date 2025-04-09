if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://ee4ee8c03a26.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.755921704393.channel.LOohfipmCQDP.m3u8",
      text: "WORLDWIDE - OUT OF INDIA USERS",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040243/15mindvrm01f15d6223ccd742da93085a408526bb9c09april2025/master.m3u8",
      text: "ENGLISH - INDIAN USERS",
    },
        {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040243/15mindvrm01f15d6223ccd742da93085a408526bb9c09april2025/master.m3u8",
      text: "HINDI - INDIAN USERS",
    },
  ];

  const container = document.getElementById("link-container");

  links.forEach(link => {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.className = "link-box";
    a.textContent = link.text;
    p.appendChild(a);
    container.appendChild(p);
  });
});
