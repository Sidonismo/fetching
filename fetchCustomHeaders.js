fetch('https://jsonplaceholder.typicode.com/users', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent',
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    var tag = document.createElement('p');
    var text = document.createTextNode(data[0].name);
    tag.appendChild(text);
    var element = document.getElementById('new');
    element.appendChild(tag);
  })
  .catch((error) => console.error(error));
