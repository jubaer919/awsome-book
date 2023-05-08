export default function listFunctionality() {
  const list = document.querySelector('#list');
  const contact = document.getElementById('contact');
  const adding = document.getElementById('add-new');
  const addSection = document.getElementById('add-section');
  const booksection = document.getElementById('books');
  const contactsection = document.getElementById('section-contact');

  list.addEventListener('click', () => {
    list.classList.add('active');
    booksection.classList.add('block');
    booksection.classList.remove('none');
    addSection.classList.add('none');
    addSection.classList.remove('block');
    contact.classList.remove('active');
    contactsection.classList.add('none');
    contactsection.classList.remove('block');
    adding.classList.remove('active');
  });

  adding.addEventListener('click', () => {
    adding.classList.add('active');
    addSection.classList.add('block');
    addSection.classList.remove('none');
    contactsection.classList.add('none');
    contact.classList.remove('active');
    contactsection.classList.remove('block');
    booksection.classList.add('none');
    booksection.classList.remove('block');
    list.classList.remove('active');
  });

  contact.addEventListener('click', () => {
    contact.classList.add('active');
    contactsection.classList.add('block');
    contactsection.classList.remove('none');
    addSection.classList.add('none');
    adding.classList.remove('active');
    addSection.classList.remove('block');
    booksection.classList.add('none');
    booksection.classList.remove('block');
    list.classList.remove('active');
  });
}