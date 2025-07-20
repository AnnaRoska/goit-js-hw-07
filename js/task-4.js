const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        email: formElem.elements.email.value.trim(),
        password: formElem.elements.password.value.trim(),
    };
    if (userData.email  === '' || userData.password === '') {
        alert('All form fields must be filled in');
    }
    else {
      console.log(userData);  
    }
    formElem.reset();
}
)