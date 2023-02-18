const button1 = document.getElementById('post-button-1') as HTMLButtonElement;

console.log(button1);

button1.addEventListener('click', (e: Event) => {
  const button = e.target as HTMLButtonElement
  if (button.textContent == '⬇') {
    button.textContent = '➡'
  } else button.textContent = '⬇'
});
