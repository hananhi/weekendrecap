
const log_in=document.getElementById('login');
const email=document.getElementById('email');
const password=document.getElementById('pass');
const name=document.getElementById('name');


const email_massage=document.getElementById('emailError');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


email.addEventListener('input', function () {

    if (validateEmail(email.value)) {
   
     email_massage.style.display= 'none' ;
    } else {
      email_massage.textContent = 'Invalid email address';
      email_massage.style.color = 'red';
    }
  });
  
function validateEmail(email) {
  return emailRegex.test(email);
}

const pass_massage=document.getElementById('passwordError');
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

password.addEventListener('input', function () {

    if (validatepass(password.value)) {
        pass_massage.style.display= 'none' ;
    } else {
      pass_massage.textContent = 'Invalid password';
      pass_massage.style.color = 'red';
    }
  });

  function validatepass(pass){
    passwordRegex.test(pass);
  }


  


  log_in.addEventListener('click',log_in_func);
  
  localStorage.setItem('name', name.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
  

  function log_in_func(){

    var customURL = 'flight.html';
    window.location.href = customURL;
    window.location.assign(customURL);
    
    // Current page won't get saved in the history:
    window.location.replace(customURL); 
    
    
    // Gecko only:
    window.document.location = customURL

  }


let admin ;
const check_box=document.getElementById('checkbox');

if(check_box.checked){
  localStorage.setItem('admin' ,"false");
}
else{
  localStorage.setItem('admin',"true");
}