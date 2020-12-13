const buttonEl = document.getElementById('formSub2');
var formEl = document.getElementById('formEl');
buttonEl.addEventListener('click', function () {
  const token = localStorage.getItem('token');

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
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
    .catch((error) => console.log('error bla', error));
});
