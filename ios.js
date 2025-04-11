if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://livecrichdtv.pages.dev/ww",
      text: "WORLDWIDE - OUT OF INDIA USERS",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-sports-eng-cf.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040249/15mindvrm0196aee80e6b0944cfb66338cda8d9b49011april2025/master.m3u8",
      text: "ENGLISH - INDIAN USERS",
    },
        {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-sports-hin-cf.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040249/15mindvrm0196aee80e6b0944cfb66338cda8d9b49011april2025/master.m3u8",
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
