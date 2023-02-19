var postSymbol1 = document.getElementById('post-button-1');
var postTitle1 = document.getElementById('post-title-1');
var post1 = document.getElementById('post-1');
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
    if (button.textContent == '☽') {
        post1.style.borderTop = '2px solid whitesmoke';
    }
    else {
        post1.style.borderBottom = '2px solid whitesmoke';
    }
    setTimeout(function () {
        if (button.textContent == '☽') {
            button.textContent = '☼';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            setTimeout(function () {
                post1.style.borderBottom = '2px solid black';
                post1.style.borderTop = '2px solid whitesmoke';
            }, 100);
        }
        else {
            setTimeout(function () {
                post1.style.borderBottom = '2px dashed whitesmoke';
                post1.style.borderTop = '2px solid black';
            }, 100);
            button.textContent = '☽';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
        }
    }, 200);
};
postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
