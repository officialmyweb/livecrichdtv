if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "WORLDWIDE/OUT OF INDIA USERS - S1",
    },
    {
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "HINDI - ALL USERS - S1",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://ee4ee8c03a26.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.755921704393.channel.LOohfipmCQDP.m3u8",
      text: "WORLDWIDE/OUT OF INDIA USERS - S2",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://ee4ee8c03a26.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.755921704393.channel.LOohfipmCQDP.m3u8",
      text: "HINDI - ALL USERS - S2",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://vkvsd251.okcdn.ru/cmaf/8174863256108/sig/BxYlgbYeMHU/srcIp/172.69.178.85/urls/45.136.20.85/expires/1744407523175/clientType/13/srcAg/CHROME/fromCache/1/mid/9467564993324/id/8174863256108/get/hls_9467564993324.M8H9Ktvtoeg.m3u8",
      text: "FOX CRICKET - MOBILE USERS ",
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
