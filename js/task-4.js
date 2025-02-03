const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in')
        return;
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    }

    console.log(formData);
    
    form.reset()
})
