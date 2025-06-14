 if (confirm("Join Our Telegram Channel @cricxfootball")) {
            window.location.href = "https://telegram.me/cricxfootball";
 }
// Define your streams
const streams = {
    m1: "https://stream196tp.com/global1.php?stream=telefe",
    m2: "https://stream196tp.com/global1.php?stream=dsports",
    m3: "#",
    m4: "https://streamtp4.com/global1.php?stream=disney10",
    m5: "https://streamtp4.com/global1.php?stream=disney12",
    m6: "https://streamtp4.com/global1.php?stream=disney13",
    m7: "https://streamtp4.com/global1.php?stream=disney14",
    m8: "https://streamtp4.com/global1.php?stream=espndeportes",
    m9: "https://la12hd.com/vivo/canales.php?stream=espnplus2",
    m10: "https://streamtp4.com/global1.php?stream=espndeportes",
   
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
