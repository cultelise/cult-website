const postSymbol1 = document.getElementById(
  'post-button-1'
) as HTMLButtonElement;
const postTitle1 = document.getElementById('post-title-1') as HTMLLinkElement;
const post1 = document.getElementById('post-1') as HTMLDivElement;
const postContent1 = document.getElementById('post-content-1');

const buttonHandler = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  let button: HTMLButtonElement;
  if (target.id == 'post-button-1') {
    button = e.target as HTMLButtonElement;
  }
  button.style.opacity = '0';
  post1.style.opacity = '0';
  button.style.fontSize = '30px';

  setTimeout(() => {
    if (button.textContent == '☼') {
      button.textContent = '☽';
      button.style.fontSize = '40px';
      button.style.opacity = '100';
      post1.style.opacity = '100';
      postContent1.className = 'hide';
      postTitle1.style.borderBottom = '1px solid black';
    } else {
      button.textContent = '☼';
      button.style.fontSize = '40px';
      button.style.opacity = '100';
      post1.style.opacity = '100';
      postContent1.className = 'show';
      postTitle1.style.borderBottom = 'none';
    }
  }, 300);
};

postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler);
