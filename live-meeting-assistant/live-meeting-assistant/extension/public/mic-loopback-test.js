document.addEventListener('DOMContentLoaded', () => {
    const startMicButton = document.getElementById('startMicButton');
    const loopbackAudio = document.getElementById('loopbackAudio');
    const statusDiv = document.getElementById('status');
    let localStream = null;

    if (startMicButton && loopbackAudio && statusDiv) {
        startMicButton.onclick = async () => {
            statusDiv.textContent = 'Status: Requesting microphone access...';
            try {
                if (localStream) {
                    localStream.getTracks().forEach(track => track.stop());
                    localStream = null;
                    loopbackAudio.srcObject = null;
                    statusDiv.textContent = 'Status: Loopback stopped. Click again to start.';
                    startMicButton.textContent = 'Start Microphone Loopback';
                    console.log('Microphone loopback stopped.');
                    return;
                }

                localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
                statusDiv.textContent = 'Status: Microphone access granted. Playing loopback...';
                loopbackAudio.srcObject = localStream;
                loopbackAudio.play().catch(error => {
                    console.warn('Loopback audio play() rejected (often benign on first try or if already playing):', error.message);
                });
                startMicButton.textContent = 'Stop Microphone Loopback';
                console.log('Microphone loopback started.');
            } catch (err) {
                console.error('Error accessing microphone:', err);
                statusDiv.textContent = 'Status: Error accessing microphone - ' + (err instanceof Error ? err.message : String(err));
                alert('Could not access microphone: ' + (err instanceof Error ? err.message : String(err)));
            }
        };
    } else {
        console.error('Could not find one or more required elements: startMicButton, loopbackAudio, statusDiv');
    }
}); 