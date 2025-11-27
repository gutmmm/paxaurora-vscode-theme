// Inject video background into empty editor screen
(function() {
    function addVideoBackground() {
        const watermark = document.querySelector('.editor-group-watermark');
        if (watermark && !watermark.querySelector('video')) {
            // Create video element
            const video = document.createElement('video');
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.style.position = 'absolute';
            video.style.top = '50%';
            video.style.left = '50%';
            video.style.minWidth = '100%';
            video.style.minHeight = '100%';
            video.style.width = 'auto';
            video.style.height = 'auto';
            video.style.transform = 'translate(-50%, -50%)';
            video.style.opacity = '1';
            video.style.zIndex = '0';
            video.style.objectFit = 'cover';

            // Set video source - dynamically get the extension path
            const styleLink = document.querySelector('link[href*="paxauroratheme"]');
            if (styleLink) {
                const extensionPath = styleLink.href.split('/styles/')[0];
                video.src = extensionPath + '/assets/vscode3.mp4';
            }

            // Insert video as first child
            watermark.style.position = 'relative';
            watermark.style.overflow = 'hidden';
            watermark.insertBefore(video, watermark.firstChild);
        }
    }

    // Run on load
    addVideoBackground();

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
        addVideoBackground();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
