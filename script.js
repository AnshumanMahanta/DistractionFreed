// Function to extract the video ID and timestamp from URL
function loadVideo() {
    const videoLink = document.getElementById('video-link').value;

    // Regular expression to extract video ID and timestamp
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:.*t=([0-9]+))?/;
    const match = videoLink.match(regex);

    if (match && match[1]) {
        const videoID = match[1]; 
        const timestamp = match[2] ? `&start=${match[2]}` : ""; // Add timestamp if present

        // Load video into iframe
        document.getElementById('yt-player').src = `https://www.youtube.com/embed/${videoID}?rel=0&autoplay=1&modestbranding=1&showinfo=0&controls=1&fs=1${timestamp}`;
    } else {
        alert("Please enter a valid YouTube video URL.");
    }
}

// Fullscreen toggle
document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const iframe = document.getElementById('yt-player');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
});