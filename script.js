let myLibrary = [];

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
    myLibrary.push(this);
}

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', () => {addBookToLibrary(), resetInputs()});

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let status = document.querySelector("#status").value;
    const book = new Book(title, author, status);
    const row = document.createElement("p")
    row.textContent = book.title
    listOfBooks.appendChild(row)
}

function resetInputs() {
    document.querySelector("#title").value=null;
    document.querySelector("#author").value=null;
    document.querySelector("#status").value=null;
}

const modal = document.querySelector(".modal");
const searchbar = document.querySelector("#searchbar");
const closeBtn = document.querySelector(".close");
searchbar.addEventListener('click', () => modal.style.display = "block");
closeBtn.addEventListener('click', () => modal.style.display = "none");


const book1 = new Book("Pride and Prejudice", "Jane Austen", "Want to read");
const book2 = new Book("Malibu Rising", "Taylor Jenkins Reid", "Read");
const book3 = new Book("Think Like a Programmer: An Introduction to Creative Problem Solving", "V. Anton Spraul", "Currently reading");

const listOfBooks = document.querySelector("#listOfBooks")

