const book1 = {
    title:"john",
    author:"wick",
    pages:123,
    read:"yes"
}

const book2 = {
    title:"krijg",
    author:"de",
    pages:1233,
    read:"no"
}

const book3 = {
    title:"hoer",
    author:"kanker",
    pages:123,
    read:"yes"
}

const book4 = {
    title:"pip",
    author:"ik",
    pages:123,
    read:"neekankernerd"
}

const myLibrary = [
    book1, 
    book2,
    book3,
    book4,
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    title = prompt("What is title?")
    author = prompt("Who is author?")
    pages = prompt("How many pages?")
    read = prompt("Did you read book?")
    const newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)
    console.log(myLibrary)
};

function loopThroughlibrary() {
    for( let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
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

        var boekencontainer = document.getElementById("boekencontainer");
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        boekencontainer.appendChild(bookDiv);
    }
}

loopThroughlibrary()

const dialog = document.getElementById("my_dialog")
document.getElementById("addBookBtn").addEventListener("click", () => {
    dialog.showModal();

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
 }})
})


