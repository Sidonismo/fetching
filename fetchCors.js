fetch('https://api.github.com/orgs/nodejs', {
  // Useful for including session ID (and, IIRC, authorization headers)
  credentials: 'include',
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Prints result from `response.json()`
    var tag = document.createElement('p');
    var text = document.createTextNode(data.url);
    tag.appendChild(text);
    var element = document.getElementById('new');
    element.appendChild(tag);
  })
  .catch((error) => console.error(error));
