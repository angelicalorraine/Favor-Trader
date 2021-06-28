const signupBtn = $('#signup-btn');
const loginBtn = $('#login-btn');

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};



const signupFormHandler = async (event) => {
  event.preventDefault();

  const skills1 = [];
  $.each($("input[name='skillOption']:checked"), function () {
    skills1.push($(this).val());
  });

  function skillsArray(skills1) {
    const skillsA = JSON.stringify(skills1);
    return skillsA;

  }


  // Collect values from the signup form
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const first_name = document.querySelector('#firstName-signup').value.trim();
  const last_name = document.querySelector('#lastName-signup').value.trim();
  const zip = document.querySelector('#zip-signup').value.trim();
  const address = document.querySelector('#address-signup').value.trim();
  const city = document.querySelector('#city-signup').value.trim();
  const state = document.querySelector('#state-signup').value.trim();
  const skills = skillsArray(skills1);
  console.log(skills);

  function findAndReplace(string, target, replacement) {
    let i = 0, length = string.length;
    for (i; i < length; i++) {
      string = string.replace(target, replacement);
    }
    return string;
  }
  const formattedAddress = findAndReplace(address, " ", "+");

  const location_string = `${formattedAddress}+${city}+${state}+${zip}`;

  if (email && password && first_name && last_name && zip && location_string && skills) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, first_name, last_name, zip, location_string, skills }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);

    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

signupBtn.on('click', function () {
  $('#signup-form').show();
  $('#login-form').hide();
});

loginBtn.on('click', function () {
  $('#login-form').show();
  $('#signup-form').hide();
});