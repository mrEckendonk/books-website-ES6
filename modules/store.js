export default class Store {
  
  static getBook() {
    let bookArr = [];
    if (localStorage.getItem('bookCollection') !== null) {
      bookArr = JSON.parse(localStorage.getItem('bookCollection'));
    } else {
      bookArr = [];
    }
    return bookArr;
  }

  static storeBook(book) {
    const books = this.getBook();
    books.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(books));
  }
  
  static removeBook(id) {
    const books = this.getBook();
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('bookCollection', JSON.stringify(books));
  }
  
}
