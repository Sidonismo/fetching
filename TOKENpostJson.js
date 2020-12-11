const formEl2 = document.getElementById('login_form');

const buttonEl2 = document.getElementById('sign_in_button');

// funkce, která fetchuje token s param: url http://localhost:1337/auth/local
// a data - identifier: 'email', password: 'heslo'
function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'same-origin', 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Use correct payload (matching 'Content-Type')
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  //.catch((error) => console.error(error));
}

//zavolání postRequest s param identifier a passsword
// V tomto zavolání je další fetch, který odešle článek s tokenem
const bla = function () {
  postRequest('http://localhost:1337/auth/local', {
    // identifier: 'eldacigan@gmail.com',
    // password: 'DnT3LVZVRND74pq',
    identifier: formEl2.email.value,
    password: formEl2.pass.value,
  })
    .then((data) => {
      console.log(data.jwt);
      console.log(formEl2.pass.value);
      console.log(formEl2.email.value);
      localStorage.setItem('token', data.jwt);
      //   if (data.jwt) {
      //     window.location.replace('cms.html');
      //   }
    })
    .catch((error) => console.log('error', error));
};

buttonEl2.addEventListener('click', bla);
