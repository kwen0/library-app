let myLibrary = [];

function Book(title, author, status) {
    this.Title = title;
    this.Author = author;
    this.Status = status;
    myLibrary.push(this);
}

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', () => {
    if (document.querySelector("#title").value == "" || 
    document.querySelector("#author").value == "" || 
    document.querySelector("#status").value == "") {
        alert("Please fill in all the fields")
    } else {
        addBookToLibrary();
        addBookToTable(); 
        resetInputs();
    }
});

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let status = document.querySelector("#status").value;
    const book = new Book(title, author, status);
}

function resetInputs() {
    document.querySelector("#title").value=null;
    document.querySelector("#author").value=null;
    document.querySelector("#status").value=null;
}

const modal = document.querySelector(".modal");
addBtn.addEventListener('click', () => modal.style.display = "block");
cancel.addEventListener('click', () => modal.style.display = "none");

const book1 = new Book("Pride and Prejudice", "Jane Austen", "Want to read");
const book2 = new Book("Malibu Rising", "Taylor Jenkins Reid", "Read");
const book3 = new Book("Think Like a Programmer", "V. Anton Spraul", "Currently reading");
  
function generateTable() {
    for (let book of myLibrary) {
      let row = table.insertRow();
      for (key in book) {
        let cell = row.insertCell();
        let text = document.createTextNode(book[key]);
        cell.appendChild(text);
      }
      let cell = row.insertCell();
      let delBtn = document.createElement("button");
      delBtn.innerHTML = "Remove";
      cell.appendChild(delBtn)
    }
  }
  
const table = document.querySelector("table");
const data = Object.keys(myLibrary[0]);

generateTable();

function addBookToTable() {
    let bookToAdd = myLibrary[myLibrary.length - 1]
    let row = table.insertRow();
    for (key in bookToAdd) {
        let cell = row.insertCell();
        let text = document.createTextNode(bookToAdd[key]);
        cell.appendChild(text);
    }
    let cell = row.insertCell();
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Remove";
    cell.appendChild(delBtn)
}


table.addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[0]
    if (e.target.innerHTML == "Remove") {
        if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
          deleteBook(findBook(currentTarget.innerText));
      }
  });

function deleteBook(book) {
    myLibrary.splice(book, 1);
    table.deleteRow(book+1);
}

function findBook(title) {
    for (book of myLibrary) {
        if (book.Title === title) {
            console.log(myLibrary.indexOf(book))
            return myLibrary.indexOf(book);
        }
    }
}

