var postSymbol1 = document.getElementById('post-button-1');
var postTitle1 = document.getElementById('post-title-1');
var buttonHandler = function (e) {
    var target = e.target;
    var button;
    if (target.id == 'post-button-1') {
        button = e.target;
    }
    else {
        button = postSymbol1;
    }
    button.style.opacity = '0';
    button.style.fontSize = '30px';
    setTimeout(function () {
        {
            if (button.textContent == '☽') {
                button.textContent = '☼';
                button.style.fontSize = '40px';
                button.style.opacity = '100';
            }
            else {
                button.textContent = '☽';
                button.style.fontSize = '40px';
                button.style.opacity = '100';
            }
        }
    }, 200);
};
postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
