var button1 = document.getElementById('post-button-1');
console.log(button1);
button1.addEventListener('click', function (e) {
    var button = e.target;
    if (button.textContent == '⬇') {
        button.textContent = '➡';
    }
    else
        button.textContent = '⬇';
});
