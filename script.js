document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

document.getElementById('noBtn').addEventListener('click', function(event) {
    // Do nothing, the button does not work
    event.preventDefault();
});
