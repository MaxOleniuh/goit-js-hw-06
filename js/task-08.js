const form = document.querySelector(".login-form");

const formSubmitHandler = (e) => {
  e.preventDefault(); // 2
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("All fields should be filled!");
    return;
  } // 3
  const userData = {
    email,
    password,
  };
  console.log(userData);
  e.target.reset(); // 5
};

form.addEventListener("submit", formSubmitHandler); // 1

/*
1. Обробка відправлення форми form.login-form 
повинна відбуватися відповідно до події submit.
2. Під час відправлення форми сторінка не повинна 
перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь alert 
з попередженням про те, що всі поля повинні 
бути заповнені.
4. Якщо користувач заповнив усі поля і відправив 
форму, збери значення полів в об'єкт, де ім'я поля 
буде ім'ям властивості, а значення поля - значенням 
властивості. Для доступу до елементів форми використовуй 
властивість elements.
5. Виведи об'єкт із введеними даними в консоль і 
очисти значення полів форми методом reset.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
*/
