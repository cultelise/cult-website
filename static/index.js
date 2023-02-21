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
    postTitle1.style.opacity = '0';
    button.style.fontSize = '30px';
    // if (button.textContent == '☼') {
    //   postSymbol1.style.borderBottom = '2px solid whitesmoke';
    //   postTitle1.style.borderBottom = '2px solid whitesmoke';
    // }
    setTimeout(function () {
        if (button.textContent == '☽') {
            button.textContent = '☼';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            postTitle1.style.opacity = '100';
            postSymbol1.style.borderBottom = '2px solid black';
            postTitle1.style.borderBottom = '2px solid black';
            postContent1.className = 'hide';
        }
        else {
            postSymbol1.style.borderBottom = '2px solid whitesmoke';
            postTitle1.style.borderBottom = '2px solid whitesmoke';
            button.textContent = '☽';
            button.style.fontSize = '40px';
            button.style.opacity = '100';
            postTitle1.style.opacity = '100';
            postContent1.className = 'show';
        }
    }, 200);
};
postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
