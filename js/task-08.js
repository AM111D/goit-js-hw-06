const formEl = document.querySelector('.login-form');

// const result = [];

formEl.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
   

        const email = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;

        const formData = {
            email,
            password,
        };

        email === '' || password === '' ? alert("Please fill in all the fields") : console.log(formData);
      
        event.currentTarget.reset();
    };

    
    

