fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Prints result from `response.json()` in getRequest
    var tag = document.createElement('p');
    var text = document.createTextNode(data[0].name);
    tag.appendChild(text);
    var element = document.getElementById('new');
    element.appendChild(tag);
  })
  .catch((error) => console.error(error));
