export default class BookCollection {
  constructor() {
    this.books = [];
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addButton = document.getElementById('add');
    this.removeButton = document.getElementById('remove');
    this.booksList = document.querySelector('#books ul');

    // Load the saved books from localStorage
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
      this.renderBooks();
    }

    // Add event listeners to the buttons
    this.addButton.addEventListener('click', () => {
      const title = this.titleInput.value;
      const author = this.authorInput.value;
      this.addBook(title, author);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.titleInput.value = '';
      this.authorInput.value = '';
    });

    this.booksList.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const index = parseInt(event.target.dataset.index, 10);
        this.removeBook(index);
        localStorage.setItem('books', JSON.stringify(this.books));
      }
    });

    this.removeButton.addEventListener('click', () => {
      this.books = [];
      this.renderBooks();
      localStorage.setItem('books', JSON.stringify(this.books));
    });
  }

  renderBooks() {
    this.booksList.innerHTML = '';
    this.books.forEach((book, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-items');
      if (index % 2 === 0) {
        listItem.classList.add('gray-bg');
      }
      listItem.innerHTML = `${book.title} by "${book.author}"<button data-index="${index}">Remove</button>`;
      this.booksList.appendChild(listItem);
    });
  }

  addBook(title, author) {
    // Trim whitespace from the title and author inputs
    title = title.trim();
    author = author.trim();

    // Check if either input is empty or contains only whitespace
    if (!title || !author) {
      return;
    }

    const book = { title, author };
    this.books.push(book);
    this.renderBooks();
  }

  removeBook(index) {
    this.books = this.books.filter((book, i) => i !== index);
    this.renderBooks();
  }
}