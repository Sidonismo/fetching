const isOk = (response) =>
  response.ok
    ? response.json()
    : Promise.reject(new Error('Failed to load data from server'));

fetch('https://szidon.com/nastroje')
  .then(isOk) // <= Use `isOk` function here
  .then((data) => {
    console.log(data); // Prints result from `response.json()`
    var tag = document.createElement('p');
    var text = document.createTextNode(data.url);
    tag.appendChild(text);
    var element = document.getElementById('new');
    element.appendChild(tag);
  })
  .catch((error) => console.error(error));
