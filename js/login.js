// step-1

document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // emailField.value =('')
    const passwordField = document.getElementById('password-field')
    const password = passwordField.value;
    // passwordField.value =('')
   if(email == 'karim@.com' && password == 'karim'){
  window.location.href ='bank.html';
   }
   else{
    alert('pleas enter your valid password');
   }
})
// step-2


