if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://v18tataplaysyndication.akamaized.net/bpk-tv/Sports18_1_HD_voot_MOB/output03/index.m3u8?hdnea=exp=1744106458~acl=/*~hmac=de35bcd3e813a8ac7b21279eacbcc707f601e4fc986b52325122082e6c22eacc",
      text: "HINDI ALL USERS - S1",
    },
    {
      href: "#",
      text: "HINDI ALL USERS - S2",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://vkvsd250.okcdn.ru/cmaf/8174863256108/sig/BxYlgbYeMHU/srcIp/172.69.178.85/urls/45.136.20.85/expires/1744407523175/clientType/13/srcAg/CHROME/fromCache/1/mid/9467564993324/id/8174863256108/get/hls_9467564993324.M8H9Ktvtoeg.m3u8",
      text: "FOX CRICKET- ONLY MOBILE USERS",
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
