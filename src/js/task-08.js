const formLogin = document.querySelector('.login-form');
console.dir(formLogin);


formLogin.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
    const {email,password} = formLogin.elements;
    console.log(email.value);
    if(email.value === '' || password.value === '')  {
        alert('Всі поля повинні бути заповнені!');
    } 
 
    const obj = {
        name : email.value,
        password: password.value,
    };
   console.log(obj);

  formLogin.reset();
} 
