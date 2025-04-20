if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://v18tataplaysyndication.akamaized.net/bpk-tv/StarSports_2_Hin_HD_voot_MOB/output03/index.m3u8?hdnea=exp=1745160156~acl=/*~hmac=8b5d9983fd219cce341ec12fd598b090aaffe83953dd5f4ca5318517bf5b2602",
      text: "HIN - WORLDWIDE",
    },
    {
      href: "https://livecrichdtv.pages.dev/ww",
      text: "HIN + ENG - WORLDWIDE",
    },
    {
      href: "https://s13.24cwc.com/",
      text: "HIN -WORLDWIDE ",
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
