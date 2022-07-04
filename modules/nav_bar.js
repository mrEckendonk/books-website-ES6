export default class Navigation {
  constructor() {
    this.list = document.querySelector('.list');
    this.addNew = document.querySelector('.add-new');
    this.contact = document.querySelector('.contact');
    this.listSection = document.querySelector('.booklist');
    this.bookForm = document.querySelector('.form');
    this.contactSection = document.querySelector('.contact-info');
  }

  view() {
    this.bookForm.classList.add('hide');
    this.contactSection.classList.add('hide');

    this.list.addEventListener('click', () => {
      this.listSection.classList.remove('hide');
      this.bookForm.classList.add('hide');
      this.contactSection.classList.add('hide');
    });

    this.addNew.addEventListener('click', () => {
      this.bookForm.classList.remove('hide');
      this.listSection.classList.add('hide');
      this.contactSection.classList.add('hide');
    });

    this.contact.addEventListener('click', () => {
      this.contactSection.classList.remove('hide');
      this.bookForm.classList.add('hide');
      this.listSection.classList.add('hide');
    });
  }
}
