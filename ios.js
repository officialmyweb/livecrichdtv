if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
  window.location.href = "https://telegram.me/livecrichdofficial";
}

document.addEventListener("DOMContentLoaded", function () {
  const links = [
        {
      href: "#",
      text: "HINDI HD - OUT + IN INDIA",
    },
    {
      href: "#",
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
