function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks()
})



// in the empty function "fetch" from line 44 this line goes into the function, with the return in front of the .then
// this should list all the titles of the books by removing the console.log and replacing it with "render books" in the secoung.then