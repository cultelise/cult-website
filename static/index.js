var button1 = document.getElementById('post-button-1');
button1.addEventListener('click', function (e) {
    var button = e.target;
    button.style.opacity = '0';
    setTimeout(function () {
        {
            if (button.textContent == '☽') {
                button.textContent = '☼';
                button.style.opacity = '100';
            }
            else {
                button.textContent = '☽';
                button.style.opacity = '100';
            }
        }
    }, 200);
});
