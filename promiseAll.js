// Promise all
const posts = [
  { title: 'První zpráva', body: 'Toto je první zpráva' },
  { title: 'Druhá zpráva', body: 'Toto je druhá zpráva' },
];

const promise1 = Promise.resolve('Ahoj světe');
const promise2 = 10;
const promise3 = new Promise((odhodlani, zamitnuti) =>
  setTimeout(() => {
    const post = {
      title: 'Třetí zpráva',
      body: 'Toto je třetí zpráva, která se zdržela o dvě sekundy',
    };
    posts.push(post);
    const error = false;
    if (!error) {
      odhodlani(posts);
    } else {
      zamitnuti('Error: Něco se nepodařilo');
    }
  }, 2000)
);
const promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then((res) => res.json());

let output = '';
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
  output += `<li>${values[3][0].name}</li>`;
  output += `<li>${values[2][2].body}</li>`;
  document.body.innerHTML = output;
});
