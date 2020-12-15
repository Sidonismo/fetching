const formEl2 = document.getElementById('formEl2');

const buttonEl = document.getElementById('formSub');

// funkce, která fetchuje token s param: url http://localhost:1337/auth/local
// a data - identifier: 'email', password: 'heslo'
function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Use correct payload (matching 'Content-Type')
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

//zavolání postRequest s param identifier a passsword
// V tomto zavolání je další fetch, který odešle článek s tokenem
buttonEl.addEventListener('click', function () {
  postRequest('http://localhost:1337/auth/local', {
    identifier: formEl2.defaultLoginFormEmail.value,
    password: formEl2.Password.value,
    // identifier: 'eldacigan@gmail.com',
    // password: 'DnT3LVZVRND74pq',
  }).then((data) => {
    localStorage.setItem('token', data.jwt);
    // HTTP redirect:
    if (data.jwt) {
      window.location.replace('cms.html');
    }
  });
});
