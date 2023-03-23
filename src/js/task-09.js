const btn = document.querySelector('.change-color')
const colorValue = document.querySelector('.color');

function getRandomHexColor() { 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorHandler = (e => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});

btn.addEventListener('click', backgroundColorHandler)

/*

Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color 
і виводить значення кольору в span.color.
*/