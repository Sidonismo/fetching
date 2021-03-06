//var buttonEl = document.getElementById('formSub');
var buttonEl2 = document.getElementById('formSub2');
var formEl = document.getElementById('formEl');
var formEl2 = document.getElementById('formEl2');

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

postRequest('http://localhost:1337/auth/local', {
  identifier: formEl2.email.value,
  password: formEl2.pass.value,
  // identifier: 'eldacigan@gmail.com',
  // password: 'DnT3LVZVRND74pq',
}).then((data) => {
  buttonEl2.addEventListener('click', function () {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.jwt}`,
    });

    var formData = {};
    for (var i = 0; i < formEl.length; ++i) {
      let jmenoInputu = formEl[i].name;
      formData[jmenoInputu] = formEl[i].value;
    }

    var url = 'http://localhost:1337/jojos';

    var fetchOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        title: formData.title,
        popis: formData.popis,
        body: formData.body,
      }),
    };

    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  });
});
