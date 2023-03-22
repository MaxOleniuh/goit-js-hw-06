const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery') // select ul gallery 
// function to create a card

const makeGalleryCard = ({url, alt } = {}) => {
  return `
    <li>
      <a href="#">
        <img src="${url}" alt="${alt}">
      </a>
    </li>
  `;
};
// creating an array with cards 
const galleryCardsArray = images.map(image => {
  return makeGalleryCard(image);
});
// console.log(galleryCardsArray);
const result = gallery.insertAdjacentHTML('beforeend', galleryCardsArray.join('')); // display and join

/*
<li>
 <a href="#">
    <img url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',>
    </a>
</li>
*/

/* Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.*/
