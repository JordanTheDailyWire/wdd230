const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
  let myBookItems = input.value;

  const listItem = document.createElement('li');

  const listText = document.createElement('span');

  const listBtn = document.createElement('button');

  if (input == input.value) {

    listText.textContent = myBookItems;
    listItem.appendChild(listBtn);
 }

  listBtn.textContent = 'X';

  listItem.append(listBtn);

  listBtn.addEventListener('click', function(e) {
    list.removeChild(listItem);
  })

  input.focus();
})