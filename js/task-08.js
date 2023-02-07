const formEl = document.querySelector('.login-form');

const result = [];

formEl.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
   
        let email = formEl.elements.namedItem('email').value;
        let password = formEl.elements.namedItem('password').value;
      
        if (email == "" || password == "") {
           alert("Please fill in all the fields");
        }
       
        if (email && password) {
            result['email'] = email;
            result['password'] = password;
        }
       
        event.currentTarget.reset();
        
        console.log(result);
      }

    
    

