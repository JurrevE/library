const myLibrary = [];
const myform = document.getElementById("myform")
const dialog = document.getElementById("my_dialog")

//works
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//works
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    newBook.number = myLibrary.length;
    myLibrary.push(newBook);
    console.log(newBook);
}

function removeBook(bookIndex) {
    myLibrary.splice(bookIndex, 1)
}


function updateLibraryDisplay() {
    const boekencontainer = document.getElementById("boekencontainer");
    boekencontainer.innerHTML = ""; // Clear the container before adding books

    for (let i = 0; i < myLibrary.length; i++) {

        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "bookDiv");

        let bookTitle = document.createElement("p");
        bookTitle.textContent = '"' + myLibrary[i].title + `"`;

        let bookAuthor = document.createElement("P");
        bookAuthor.textContent = myLibrary[i].author;

        let bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " Pages";

        let bookRead = document.createElement("p");
        bookRead.textContent = myLibrary[i].read;

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add("removeBtn");

        removeBtn.addEventListener("click", () => {
            removeBook(i)
            updateLibraryDisplay()
        })

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.append(removeBtn);
        boekencontainer.appendChild(bookDiv);
    }
}


//works
document.getElementById("addBookBtn").addEventListener("click", () => {
    dialog.showModal();

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
            myform.reset();
        }
    })
})

//works
document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

    const titlenameinputvalue = document.getElementById("bookname").value;
    const authornamevalue = document.getElementById("authorname").value;
    const pagesnumbervalue = document.getElementById("pagesnumber").value
    const bookreadvalue = document.getElementById("readbook").checked
    Book(titlenameinputvalue, authornamevalue, pagesnumbervalue, bookreadvalue)
    addBookToLibrary(titlenameinputvalue, authornamevalue, pagesnumbervalue, bookreadvalue);
    updateLibraryDisplay()

    // Close the dialog and reset the form
    dialog.close();
    myform.reset();
});



