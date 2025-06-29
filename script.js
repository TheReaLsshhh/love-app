document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Move the button to a random position within the viewport
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const padding = 20; // To avoid button going out of view
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
