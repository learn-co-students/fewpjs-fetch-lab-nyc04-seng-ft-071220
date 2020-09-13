function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

let totalPages = 0

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    const li = document.createElement('li')
    h2.innerHTML = book.name
    li.innerHTML = book.numberOfPages
    totalPages += book.numberOfPages
    main.appendChild(h2)
    h2.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
