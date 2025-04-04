    if (confirm("Join Our Telegram Channel @livecrichdofficial")) {
      window.location.href = "https://telegram.me/livecrichdofficial";
    }

    document.addEventListener("DOMContentLoaded", function () {
      const videoSources = {
        English: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_ENG_IDC_MOB/Fallback/index.m3u8",
        Hindi: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_HIN_IDC_MOB/Fallback/index.m3u8",
        Gujarati: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_Guj_IDC_MOB/Fallback/index.m3u8",
        Telugu: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_TEL_IDC_MOB/Fallback/index.m3u8",
        Tamil: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_TAM_IDC_MOB/Fallback/index.m3u8",
        Marathi: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_MAR_IDC_MOB/Fallback/index.m3u8",
        Bengali: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_BEN_IDC_MOB/Fallback/index.m3u8",
        Kannada: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_KAN_IDC_MOB/Fallback/index.m3u8",
        Bhojpuri: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_Bhoj_IDC_MOB/Fallback/index.m3u8",
        Punjabi: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_Punj_IDC_MOB/Fallback/index.m3u8",
        Haryanvi: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_HAR_IDC_MOB/Fallback/index.m3u8",
        Malyalam: "https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_Mal_IDC_MOB/Fallback/index.m3u8",
    
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
