const buttonEl = document.getElementById('formSub');
const file = document.getElementById('file');
buttonEl.addEventListener('click', function () {
  const token = localStorage.getItem('token');

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });

  const formData = new FormData();
  formData.append('files', file.files[0]);
  var url = 'http://localhost:1337/upload';

  var fetchOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
  };

  fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error bla', error));
});
