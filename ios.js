if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
        {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://v18tataplaysyndication.akamaized.net/bpk-tv/StarSports_2_Hin_HD_voot_MOB/output03/index.m3u8?hdnea=exp=1744565406~acl=/*~hmac=e8a70bb1ba3e5c5864c22244494a6f64be69020d7b523bf75e93d3a542e8b963",
      text: "HINDI HD - OUT + IN INDIA",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://ee4ee8c03a26.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.755921704393.channel.LOohfipmCQDP.m3u8",
      text: "HINDI HD - OUT + IN INDIA",
    },
    {
      href: "https://livecrichdtv.pages.dev/ww",
      text: "HINDI HD - OUT + IN INDIA",
    },
    {
      href: "https://livecrichdtv.pages.dev/www",
      text: "OUT OF INDIA USERS - S2",
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
