if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
    window.location.href = "https://telegram.me/livecrichdofficial";
  }

  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const links = [
        {
        href: "https://livecrichdxtv.pages.dev/c2?id=m1",
        text: "WILLOW - ENGLISH",
      },
      {
        href: "https://s18.24cwc.com/",
        text: "WILLOW BY CRICBUZZ - HINDI",
      },
        {
        href: "https://userr3536.ifrem.net/iframe/frame.php",
        text: "ONLY OUT OF INDIA USERS",
      },
    ];

    const container = document.getElementById("link-container");

    if (container) {
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
    } else {
      console.warn("Element with ID 'link-container' not found.");
    }
  });
