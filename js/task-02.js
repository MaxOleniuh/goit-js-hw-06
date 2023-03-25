const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsUl = document.querySelector("ul#ingredients");

const result = ingredients.map((ingredient) => {
  // create new ul of list. Cycle repeats for each li.
  const li = document.createElement("li"); // create <li></li>
  li.textContent = ingredient; // <li>ingredient</li>
  li.classList.add("item"); // add class <li class="item">ingredient</li>
  return li; // return <li>ingredient</li>
});

ingredientsUl.append(...result); // add each li to an empty ul

// HTML містить порожній список ul#ingredients.

// ? Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// */
