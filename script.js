const submitBtn = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const table = document.querySelector("tbody");
let myLibrary = [];

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
    myLibrary.push(this);
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let status = document.querySelector("#status").value;
    const book = new Book(title, author, status);
}

function generateTable(array) {
    for (let key of array) {
        let row = table.insertRow();

        let col1 = row.insertCell();
        let titleCol = document.createTextNode(`${key.title}`);
        col1.appendChild(titleCol);

        let col2 = row.insertCell();
        let authorCol = document.createTextNode(`${key.author}`);
        col2.appendChild(authorCol);

        let col3 = row.insertCell();
        let statusBtn = document.createElement("button");
        statusBtn.innerHTML = `${key.status}`;
        statusBtn.classList.add("status");
        col3.appendChild(statusBtn);

        let col4 = row.insertCell();
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Remove";
        delBtn.classList.add("remove");
        col4.appendChild(delBtn)
    }
}

function addBookToTable() {
    clearTable();
    generateTable(myLibrary)
}

function clearTable() {
    for (let i = 0; i < table.rows.length;) {table.deleteRow(i)}
}

function resetInputs() {
    document.querySelector("#title").value=null;
    document.querySelector("#author").value=null;
    document.querySelector("#status").value=null;
}

function findBook(title) {
    for (book of myLibrary) {
        if (book.title === title) {
            return myLibrary.indexOf(book);
        }
    }
}

function deleteBook(book) {
    myLibrary.splice(book,1);
    table.deleteRow(book);
}

function toggleStatus(book) {
    if (myLibrary[book].status == "Read") {
        myLibrary[book].status = "Want to read";
    } else
        myLibrary[book].status = "Read";
}

addBtn.addEventListener('click', () => modal.style.display = "block");
cancel.addEventListener('click', () => modal.style.display = "none");

submitBtn.addEventListener('click', () => {
    if (document.querySelector("#title").value == "" || 
    document.querySelector("#author").value == "" || 
    document.querySelector("#status").value == "") {
        alert("Please fill in all the fields");
    } else {
        addBookToLibrary();
        addBookToTable(); 
        resetInputs();
    }
});

table.addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[0]
    if (e.target.classList.contains("remove")) {
        deleteBook(findBook(currentTarget.innerText));
    }
    if (e.target.classList.contains("status")) {
        toggleStatus(findBook(currentTarget.innerText));
        e.target.innerHTML = myLibrary[findBook(currentTarget.innerText)].status;
    }
  });

//default library
const book1 = new Book("Pride and Prejudice", "Jane Austen", "Want to read");
const book2 = new Book("Malibu Rising", "Taylor Jenkins Reid", "Read");
const book3 = new Book("Think Like a Programmer", "V. Anton Spraul", "Want to read");
const book4 = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Read")
generateTable(myLibrary);