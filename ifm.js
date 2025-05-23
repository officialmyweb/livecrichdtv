 if (confirm("Join Our Telegram Channel @cricxfootball")) {
            window.location.href = "https://telegram.me/cricxfootball";
 }
// Define your streams
const streams = {
    m1: "https://la12hd.com/vivo/canales.php?stream=espnplus2",
    m2: "https://streamtp4.com/global1.php?stream=espndeportes",
    m3: "https://p.apeiria.net/~football/cricXfootballplayer.html?dtv=https://dsjz1gms3zce5.cloudfront.net/out/v1/f413830d21d044918adac53dafc1fe3b/index.m3u8",
    m4: "https://envivo1.com/canal.php?stream=paramount2"
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
