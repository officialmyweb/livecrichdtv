if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
    window.location.href = "https://telegram.me/livecrichdofficial";
  }

  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const links = [
        {
        href: "https://p.apeiria.net/~player/fcplayer.html?dtv=https://starsportshindiii.pages.dev/index.m3u8",
        text: "IOS USERS [ONLY INDIA]",
      },
        {
        href: "https://userr3536.ifrem.net/iframe/frame.php",
        text: "IOS USERS [OUT OF INDIA]",
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
