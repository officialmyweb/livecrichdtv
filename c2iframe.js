// Define your streams
const streams = {
    m1: "https://p.apeiria.net/~player/fcplayer.html?dtv=https://bcovlive-a.akamaihd.net/b238876e5f004ec29d4e07066a044996/eu-west-1/4854911276001/playlist.m3u8",
    m2: "#",
    m3: "#",
    m4: "#"
};

// Get the "id" parameter from URL
function getStreamId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load the correct stream
function loadStream() {
    const streamId = getStreamId();
    const iframe = document.getElementById('contentFrame');

    if (streamId && streams[streamId]) {
        iframe.src = streams[streamId];
    } else {
        // Redirect to Telegram if no valid id
        window.location.href = "https://telegram.me/cricxfootball";
    }
}

// Initialize
loadStream();
