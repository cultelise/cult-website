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
            post1.style.borderBottom = '2px solid black';
            post1.style.borderTop = '2px solid whitesmoke';
            postContent1.className = 'hide';
        }
        else {
            post1.style.borderBottom = '2px dashed whitesmoke';
            post1.style.borderTop = '2px solid black';
            button.textContent = '☽';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            postContent1.className = 'show';
        }
    }, 200);
};
postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
