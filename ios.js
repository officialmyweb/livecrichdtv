if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://v18tataplaysyndication.akamaized.net/bpk-tv/StarSports_2_Hin_HD_voot_MOB/output03/index.m3u8?hdnea=exp=1745059359~acl=/*~hmac=6070bf809ebc387c3289f56e105148680d71091f465a3d723b3b250d01dfa767",
      text: "HIN - WORLDWIDE",
    },
    {
      href: "https://livecrichdtv.pages.dev/ww",
      text: "HIN + ENG - WORLDWIDE",
    },
    {
      href: "https://s13.24cwc.com/",
      text: "ALL DEVICE WORKING -WORLDWIDE ",
    },
    {
      href: "https://livecrichdtv.pages.dev/www",
      text: "ONLY WORLDWIDE - S2",
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
