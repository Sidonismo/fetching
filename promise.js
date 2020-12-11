const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((odhodlani, zamitnuti) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        odhodlani();
      } else {
        zamitnuti('Error: Něco se nepodařilo');
      }
    }, 2000);
  });
}

createPost({ title: 'Třetí zpráva', body: 'Toto je třetí zpráva' })
  .then(getPosts)
  .catch((err) => console.log(err));
