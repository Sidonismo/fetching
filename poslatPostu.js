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
  identifier: 'eldacigan@gmail.com',
  password: 'DnT3LVZVRND74pq',
}).then((data) => {
  console.log(data);
  console.log(data.jwt);
  const inputTokenEl = document.querySelector('input');
  inputTokenEl.value = data.jwt;
  console.log(inputTokenEl.value);
}); // Result from the `response.json()` call

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer "+data.jwt);
// console.log(inputTokenEl.value);
