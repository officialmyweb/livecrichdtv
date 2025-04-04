if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://s12.24cwc.com/",
      text: "WORLDWIDE/OUT OF INDIA USERS",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_ENG_IDC_MOB/Fallback/index.m3u8",
      text: "ENGLISH - INDIAN USERS",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_HIN_IDC_MOB/Fallback/index.m3u8",
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
