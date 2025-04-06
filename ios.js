if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "WORLDWIDE/OUT OF INDIA USERS",
    },
    {
      href: "https://shz.al/Sffb/livecricplayer.html?dtv=https://dai.fancode.com/primary/122689_english_hls_5007ta-no/index.m3u8&__cf_chl_rt_tk=Ml2xc0i6_c3XLHxLoBzOMTG8aTnw_XazgiL7HI1UJ7o-1743946560-1.0.1.1-6HAyFqXiGLuaBFhQk8z2iOhLgQ4CKopRAhIiHOeV0e0",
      text: "HINDI - ALL USERS",
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
