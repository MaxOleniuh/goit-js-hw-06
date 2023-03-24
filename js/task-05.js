const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');

const enterNameInputHandler = event => {
    if (input === '') {
        output.textContent = 'Anonymus'
    }
    else 
    output.textContent = event.currentTarget.value;
}

input.addEventListener('input', enterNameInputHandler)














/*
Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
підставляє його поточне значення в span#name - output.
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/