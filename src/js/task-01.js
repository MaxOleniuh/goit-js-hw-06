const categoriesList = document.querySelector('ul#categories'); // select ul categories

console.log(`Number of categories: ${categoriesList.childElementCount}`); // cgl number of categories

const item = document.querySelectorAll('.item'); // select all li with class 'item'

item.forEach(item => { // forEach clg categories titles and number of elements. Cycle repeats 3 times.
    console.log(`Category: ${item.firstElementChild.textContent}`); // categories
    console.log(`Elements: ${item.lastElementChild.childElementCount}`) // number of elements
})



/* 
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

*/