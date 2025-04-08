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
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "HINDI ALL USERS - S3",
    },
    {
      href: "#",
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
