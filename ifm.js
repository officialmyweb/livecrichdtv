 if (confirm("Join Our Telegram Channel @cricxfootball")) {
            window.location.href = "https://telegram.me/cricxfootball";
 }
// Define your streams
const streams = {
    m1: "https://streamtp4.com/global1.php?stream=peacock1",
    m2: "https://streamtp4.com/global1.php?stream=paramount1",
    m3: "https://streamtp4.com/global1.php?stream=paramount4",
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
