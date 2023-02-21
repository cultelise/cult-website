const postSymbol1 = document.getElementById(
  'post-button-1'
) as HTMLButtonElement;
const postTitle1 = document.getElementById('post-title-1') as HTMLButtonElement;
const post1 = document.getElementById('post-1') as HTMLButtonElement;
const postContent1 = document.getElementById('post-content-1');

const buttonHandler = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  let button: HTMLButtonElement;
  if (target.id == 'post-button-1') {
    button = e.target as HTMLButtonElement;
  } else {
    button = postSymbol1;
  }
  let postHeight = post1.style.height;
  console.log(postHeight);

  button.style.opacity = '0';
  postTitle1.style.opacity = '0';
  post1.style.opacity = '0';
  button.style.fontSize = '30px';
  // if (button.textContent == '☼') {
  //   postSymbol1.style.borderBottom = '2px solid whitesmoke';
  //   postTitle1.style.borderBottom = '2px solid whitesmoke';
  // }
  setTimeout(() => {
    if (button.textContent == '☽') {
      button.textContent = '☼';
      button.style.fontSize = '40px';
      button.style.opacity = '100';
      postTitle1.style.opacity = '100';
      post1.style.opacity = '100';
      // postSymbol1.style.borderBottom = '2px solid black';
      // postTitle1.style.borderBottom = '2px solid black';
      // postContent1.className = 'hide';
    } else {
      // postSymbol1.style.borderBottom = '2px solid whitesmoke';
      // postTitle1.style.borderBottom = '2px solid whitesmoke';
      button.textContent = '☽';
      button.style.fontSize = '40px';
      button.style.opacity = '100';
      postTitle1.style.opacity = '100';
      post1.style.opacity = '100';
      // postContent1.className = 'show';
      post1.style.gridRow = '1 / 3';
    }
  }, 200);
};

postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
