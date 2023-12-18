const myLibrary = [];
const myform = document.getElementById("myform");
const dialog = document.getElementById("my_dialog");

class Book { 
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return this; 
}}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    newBook.number = myLibrary.length;
    myLibrary.push(newBook);
    console.log(newBook);
}

function removeBook(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    updateLibraryDisplay();
}

function updateLibraryDisplay() {
    const boekencontainer = document.getElementById("boekencontainer");
    boekencontainer.innerHTML = ""; // Clear the container before adding books

    for (let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "bookDiv");

        let bookTitle = document.createElement("p");
        bookTitle.textContent = '"' + myLibrary[i].title + '"';

        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = myLibrary[i].author;

        let bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " Pages";

        let readStatusBtn = document.createElement("button");
        readStatusBtn.setAttribute("id", "readStatusBtn");
        if (myLibrary[i].read === true) {
            readStatusBtn.innerHTML = "Read";
            readStatusBtn.classList.add("readyes")
        } else {
            readStatusBtn.innerHTML = "Not Read";
            readStatusBtn.classList.add("readno")
        }
        
        readStatusBtn.addEventListener("click", function() {
            myLibrary[i].read = !myLibrary[i].read; // Toggle the read status
            updateLibraryDisplay(); // Update the display to reflect the change
        });
        

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add("removeBtn");

        removeBtn.addEventListener("click", () => {
            removeBook(i);
        });

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatusBtn);
        bookDiv.appendChild(removeBtn);
        boekencontainer.appendChild(bookDiv);
    }
}

document.getElementById("addBookBtn").addEventListener("click", () => {
    dialog.showModal();

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
            myform.reset();
        }
    });
});

document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

    const titlenameinputvalue = document.getElementById("bookname").value;
    const authornamevalue = document.getElementById("authorname").value;
    const pagesnumbervalue = document.getElementById("pagesnumber").value;
    const bookreadvalue = document.getElementById("readbook").checked;
    addBookToLibrary(titlenameinputvalue, authornamevalue, pagesnumbervalue, bookreadvalue);
    updateLibraryDisplay();


    dialog.close();
    myform.reset();
});
