const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phoneNumber = document.querySelector('#phoneNumber');
const message = document.querySelector('#message');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  function validateFirstName(firstName) {
    let re = /^[A-Za-z]{2,}$/;
    return re.test(firstName);
  }
  
  function validateLastName(lastName) {
    let re = /^[A-Za-z]{2,}$/;
    return re.test(lastName);
  }
  
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
  }
  
  function validatePhone(phone) {
    let re = /^\d{11}$/;
    return re.test(phone);
  }
  
  if (!validateFirstName(firstName.value)) {
    message.innerHTML = 'Please enter charecters for firstname. Dont use numbers.';
    return;
  }

  if (!validateLastName(lastName.value)) {
    message.innerHTML = 'Please enter charecters for lastname.Dont use numbers.';
    return;
  }

  if (!validateEmail(email.value)) {
    message.innerHTML = 'Please enter a valid email address.';
    return;
  }

  if (!validatePassword(password.value)) {
    message.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
    return;
  }

  if (!validatePhone(phoneNumber.value)) {
    message.innerHTML = 'Please enter phone number that have 11 number.';
    return;
  }

  form.submit();
}

function validateFirstName(firstName) {
  let re = /^[A-Za-z]{2,}$/;
  return re.test(firstName);
}

function validateLastName(lastName) {
  let re = /^[A-Za-z]{2,}$/;
  return re.test(lastName);
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
}

function validatePhone(phone) {
  let re = /^\d{11}$/;
  return re.test(phone);
}
