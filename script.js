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

const myLibrary = [
    book1, 
    book2
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
        var bookTitle = document.createElement("p");
        bookTitle.textContent = "title" + ":"+myLibrary[i].title;
        var boekencontainer = document.getElementById("boekencontainer");
        boekencontainer.appendChild(bookTitle)
    }
}