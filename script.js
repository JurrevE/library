const myLibrary = [];
const myform = document.getElementById("myform")
const dialog = document.getElementById("my_dialog")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
   
    const newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)
    console.log(myLibrary)
};

function loopThroughlibrary() {
    for( let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
        if (i === myLibrary.length - 1) {
        var bookDiv = document.createElement("div")
        bookDiv.setAttribute("class", "bookDiv")
        var bookTitle = document.createElement("p");
        bookTitle.textContent = '"'+ myLibrary[i].title + `"`;
        var bookAuthor = document.createElement("P");
        bookAuthor.textContent = myLibrary[i].author;
        var bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " Pages"
        var bookRead = document.createElement("p");
        bookRead.textContent = myLibrary[i].read;
        var removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove"
        removeBtn.id = "removeBtn"


        var boekencontainer = document.getElementById("boekencontainer");
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.append(removeBtn);
        boekencontainer.appendChild(bookDiv);
        }
    }
};

document.getElementById("addBookBtn").addEventListener("click", () => {
    dialog.showModal();

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
            myform.reset();
 }})
})


document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const titlenameinput = document.getElementById("bookname");
    const titlenameinputvalue = titlenameinput.value;
    const authornameinput = document.getElementById("authorname");
    const authornamevalue = authornameinput.value;
    const pagesnumberinput = document.getElementById("pagesnumber");
    const pagesnumbervalue = pagesnumberinput.value;
    const bookreadinput = document.getElementById("readbook");
    const bookreadvalue = bookreadinput.checked
    Book(titlenameinputvalue, authornamevalue, pagesnumbervalue, bookreadvalue)
    addBookToLibrary()
    loopThroughlibrary()

    // Close the dialog and reset the form
    dialog.close();
    myform.reset();
});



