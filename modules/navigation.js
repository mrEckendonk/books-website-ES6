import UI from './book.js';
import Store from './store.js';
import Book from './view.js ';

const controlEvents = () => {

    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const addBtn = document.getElementById('add');

    
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (title.value === '' || author.value === '') return;

        const bookId = Math.floor(Math.random() * 1000);
        const newBook = new Book(title.value, author.value, bookId);
        UI.addBook(newBook);
        Store.storeBook(newBook);
        title.value = '';
        author.value = '';
    });

    document.addEventListener('DOMContentLoaded', () => {
        UI.displayBooks();
    });
};

export default controlEvents;