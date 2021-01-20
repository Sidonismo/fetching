fetch('https://wesmir.cz/eli/uka.php H2', {
  mode: 'cors',
  header: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
})
  .then(function (response) {
    // The API call was successful!
    console.log(response);
    return response.text();
  })
  .then(function (text) {
    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html');
    const section = doc.documentElement.querySelector('h1');
    document.querySelector('.title').appendChild(section);

    // Get the image file
    console.log(section.innerHTML);
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
