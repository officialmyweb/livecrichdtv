if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
      window.location.href = "https://telegram.me/livecrichdofficial";
    }

    document.addEventListener("DOMContentLoaded", function () {
      const videoSources = {
        English: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Hindi: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
        Gujarati: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Telugu: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
        Tamil: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Marathi: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
        Bengali: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Kannada: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
        Bhojpuri: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Punjabi: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
        Haryanvi: "https://prod-sports-eng-fa.jiocinema.com/hls/live/2117030/inallow-ipl-2025/eng/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master_apm.m3u8",
        Malyalam: "https://prod-sports-hin-fa.jiocinema.com/hls/live/2117033/inallow-ipl-2025/hin/1540040246/15mindvrm0153748b1625e24a9ebc935a7faca3fe7810april2025/master.m3u8",
    
      };

      const playerInstance = jwplayer("video");

      function loadAndPlay(language) {
        const source = videoSources[language];
        playerInstance.load([{ file: source }]);
        playerInstance.play();
      }

      document.getElementById("video-select").addEventListener("change", function () {
        loadAndPlay(this.value);
      });

      document.getElementById("language-switch").addEventListener("click", function () {
        const select = document.getElementById("video-select");
        const options = Object.keys(videoSources);
        let nextIndex = (options.indexOf(select.value) + 1) % options.length;
        select.value = options[nextIndex];
        loadAndPlay(options[nextIndex]);
      });

      // Initial load
      loadAndPlay(document.getElementById("video-select").value);

      playerInstance.setup({
        autostart: true,
        mute: false,
        playlist: [{ file: videoSources[document.getElementById("video-select").value] }]
      });
    });
