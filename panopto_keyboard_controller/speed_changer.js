document.addEventListener('keydown', function (event) {
	const SPEED_BUMP = 0.25;
    const video = document.querySelector('video'); // Select the video element on the page
    if (!video) return;

    if (event.key === '+') {
        video.playbackRate += SPEED_BUMP;
        console.log(`Playback speed increased to: ${video.playbackRate.toFixed(1)}x`);
    } else if (event.key === '-') {
        video.playbackRate = Math.max(SPEED_BUMP, video.playbackRate - SPEED_BUMP);
        console.log(`Playback speed decreased to: ${video.playbackRate.toFixed(1)}x`);
	} else if (event.key === '=') {
        video.playbackRate = 1
        console.log(`Playback speed set to: ${video.playbackRate.toFixed(1)}x`);
    }
});
