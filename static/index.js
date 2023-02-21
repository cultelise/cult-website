var postSymbol1 = document.getElementById('post-button-1');
var postTitle1 = document.getElementById('post-title-1');
var post1 = document.getElementById('post-1');
var postContent1 = document.getElementById('post-content-1');
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
    post1.style.opacity = '0';
    button.style.fontSize = '30px';
    setTimeout(function () {
        if (button.textContent == '☽') {
            button.textContent = '☼';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            post1.style.opacity = '100';
            post1.style.alignSelf = 'center';
        }
        else {
            button.textContent = '☽';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            post1.style.opacity = '100';
            post1.style.alignSelf = 'stretch';
        }
    }, 300);
};
postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
