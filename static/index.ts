const postSymbol1 = document.getElementById('post-button-1') as HTMLButtonElement;
const postTitle1 = document.getElementById('post-title-1') as HTMLButtonElement

const buttonHandler = (e: Event) => {
  const target = e.target as HTMLButtonElement
  let button: HTMLButtonElement
  if (target.id == 'post-button-1') {
    button = e.target as HTMLButtonElement
  } else {
    button = postSymbol1
  }
  button.style.opacity = '0'
  button.style.fontSize = '30px';
  setTimeout(() => {
    {if (button.textContent == '☽') {
    button.textContent = '☼'
    button.style.fontSize = '40px';
    button.style.opacity = '100'
  } else {
    button.textContent = '☽'
    button.style.fontSize = '40px';
    button.style.opacity = '100'
  }}}, 200)
}

postSymbol1.addEventListener('click', buttonHandler);
postTitle1.addEventListener('click', buttonHandler)

