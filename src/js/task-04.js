
const counter = document.querySelector('#value')
let counterValue = 0;
const buttonAdd = document.querySelector('.button-plus');
const buttonRemove = document.querySelector('.button-remove');


const counterAddClickHandler = event => {
    counterValue += 1;
    counter.textContent = counterValue;
     
};
const counterRemoveClickHandler = event => {
      counterValue -= 1;
    counter.textContent = counterValue;
};

buttonAdd.addEventListener('click', counterAddClickHandler);
buttonRemove.addEventListener('click', counterRemoveClickHandler)



















/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/