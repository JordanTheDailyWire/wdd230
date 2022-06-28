const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
  let myBookItems = input.value;
  input.value = "";

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myBookItems;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'X';
  list.appendChild(listItem);
  

  listBtn.addEventListener('click', function() {
    list.removeChild(listItem);
  });

  input.focus();
});