const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onSubmitForm);
function onSubmitForm(event,email,password) {
  event.preventDefault();
  email = event.currentTarget.elements.email.value;
  password  = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Please, fill in all the required forms!");
  }
  else {
    console.log({email,password})
    event.currentTarget.reset();
  };
}
