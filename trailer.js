document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('fullscreenVideo');

  
    function setFullscreen() {
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '90%';
        video.style.height = '90%';
        video.style.objectFit = 'cover';
    }

  
    setFullscreen();

 
    window.addEventListener('resize', setFullscreen);
});