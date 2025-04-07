if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
    {
      href: "#",
      text: "WORLDWIDE/OUT OF INDIA USERS - S2",
    },
    {
      href: "#",
      text: "HINDI - ALL USERS - S2",
    },
    {
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "WORLDWIDE/OUT OF INDIA USERS - S1",
    },
    {
      href: "https://ifarma.embedct.space/iframe/frame.php",
      text: "HINDI - ALL USERS - S1",
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
