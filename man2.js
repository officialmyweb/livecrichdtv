const streams = {
  "EFL": "https://gametimes.top/home/blog1/",
  "REY": "https://gametimes.top/home/blog2/",
  "PL3": "https://gametimes.top/home/blog3/",
  "U5": "https://matchify.zip/home/blog5/",
  "U6": "https://matchify.zip/home/blog7/",
  "U7": "https://matchify.zip/home/blog8/",
  "U8": "https://matchify.zip/home/blog4/",
  "U9": "https://matchify.zip/home/blog9/",
  "L1": "https://gametimes.top/home/blog4/",
  "F1": "https://ballcontrol.click/home/blogf/",
  "UFC": "https://gametimes.top/mma/blog/",
  "B1": "https://gametimes.top/home/blog3/",
  "S1": "https://allrounderlive.pages.dev/player2?url=https://dillzyserver.dillzycreations.workers.dev/live/abc123.m3u8",
  "ES": "https://allrounderlive.pages.dev/dilz?id=65656576"
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const iframe = document.getElementById("player");
  const wrap = document.querySelector(".player-wrap");

  if (!id || !streams[id]) {
    document.body.innerHTML =
      "<h2 style='color:white;text-align:center;margin-top:40vh'>Invalid Stream ID</h2>";
    return;
  }

  iframe.src = streams[id];

  // ---- Anti Ad Redirect (Click Blocker) ----
  const blocker = document.createElement("div");
  blocker.className = "click-blocker";

  // OPTIONAL: allow first click only (for play button)
  // blocker.onclick = () => blocker.remove();

  wrap.appendChild(blocker);
});
