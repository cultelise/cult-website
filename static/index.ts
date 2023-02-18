const button1 = document.getElementById('post-button-1') as HTMLButtonElement;


button1.addEventListener('click', (e: Event) => {
  const button = e.target as HTMLButtonElement
  button.style.opacity = '0'
  setTimeout(() => {
    {if (button.textContent == '☽') {
    button.textContent = '☼'
    button.style.opacity = '100'
  } else {
    button.textContent = '☽'
    button.style.opacity = '100'
  }}}, 200)
});
