const formEl = document.querySelector('form.login-form');

let result = [];

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    let user = {};

    let email = formEl.elements.namedItem('email').value;
    let password = formEl.elements.namedItem('password').value;

    if (email == '' || password == '') {
        alert('Please fill all fields!')
    }

    if (email && password) {
      result["email"] = email;
      result["password"] = password;
    }



console.log(result)
}
