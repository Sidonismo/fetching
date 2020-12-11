const posts = [];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      //vypíše jména post.name
      output += `<li>${post.name}</li>`;
      //vypíše webové stránky
      output += `<li>${post.website}</li><br />`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((odhodlani, zamitnuti) => {
    setTimeout(() => {
      post.forEach((element) => posts.push(element));

      const error = false;
      if (!error) {
        odhodlani(post);
      } else {
        zamitnuti('Error: Něco se nepodařilo');
      }
    }, 2000);
  });
}

async function fetchUsers() {
  //čekáme wait, dokuď se nevyřídí funkce createPost
  let post = await fetch('https://jsonplaceholder.typicode.com/users');
  post = await post.json();
  await createPost(post);
  // pokračujeme dál synchroně
  getPosts();
  console.log(post);
  console.log(posts);
}
fetchUsers();
