import Store from './store.js';

export default class UI {
  static displayBooks() {

    const books = Store.getBook();
    books.forEach((book) => {
      UI.addBook(book);
    });
  }

  static addBook(book) {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const removeBtn = document.createElement('button');

    const bookList = document.querySelector('.book');

    div.classList.add('new-book');
    para.classList.add('book-detail');
    removeBtn.classList.add('remove');

    para.innerHTML = `<q><cite>${book.title}</cite></q> by ${book.author}`;
    removeBtn.setAttribute('id', `${book.id}`);
    removeBtn.textContent = 'remove';
    removeBtn.addEventListener('click', () => {
      Store.removeBook(book.id);
      removeBtn.parentElement.remove();
    });

    div.appendChild(para);
    div.appendChild(removeBtn);

    bookList.appendChild(div);
  }


}
