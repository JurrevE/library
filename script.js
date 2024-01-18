// Array to store book objects
const myLibrary = [];

// Get elements from the DOM
const myform = document.getElementById("myform");
const dialog = document.getElementById("my_dialog");

// Book class to create book objects
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        return this;
    }
}

// Function to add a new book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    newBook.number = myLibrary.length; // Assign a unique number to each book
    myLibrary.push(newBook); // Add the new book object to the library array
    console.log(newBook); // Log the newly added book
}

// Function to remove a book from the library
function removeBook(bookIndex) {
    myLibrary.splice(bookIndex, 1); // Remove the book at the specified index
    updateLibraryDisplay(); // Update the display after removal
}

// Function to update the library display on the webpage
function updateLibraryDisplay() {
    const boekencontainer = document.getElementById("boekencontainer");
    boekencontainer.innerHTML = ""; // Clear the container before adding books

    // Loop through each book in the library and create elements to display them
    for (let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "bookDiv");

        // Create elements for book details (title, author, pages)
        let bookTitle = document.createElement("p");
        bookTitle.textContent = '"' + myLibrary[i].title + '"';

        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = myLibrary[i].author;

        let bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " Pages";

        // Create button to toggle read status
        let readStatusBtn = document.createElement("button");
        readStatusBtn.setAttribute("id", "readStatusBtn");
        if (myLibrary[i].read === true) {
            readStatusBtn.innerHTML = "Read";
            readStatusBtn.classList.add("readyes");
        } else {
            readStatusBtn.innerHTML = "Not Read";
            readStatusBtn.classList.add("readno");
        }

        // Event listener to toggle the read status when the button is clicked
        readStatusBtn.addEventListener("click", function () {
            myLibrary[i].read = !myLibrary[i].read; // Toggle the read status
            updateLibraryDisplay(); // Update the display to reflect the change
        });

        // Create button to remove a book
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add("removeBtn");

        // Event listener to remove the corresponding book when the button is clicked
        removeBtn.addEventListener("click", () => {
            removeBook(i);
        });

        // Append book details and buttons to the bookDiv and then to the container
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatusBtn);
        bookDiv.appendChild(removeBtn);
        boekencontainer.appendChild(bookDiv);
    }
}

// Event listener for the 'Add Book' button
document.getElementById("addBookBtn").addEventListener("click", () => {
    dialog.showModal();

    // Close the dialog box when clicked outside the dialog or on close button
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
            myform.reset();
        }
    });
});

// Event listener for the form submission to add a book
document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values from the form
    const titlenameinputvalue = document.getElementById("bookname").value;
    const authornamevalue = document.getElementById("authorname").value;
    const pagesnumbervalue = document.getElementById("pagesnumber").value;
    const bookreadvalue = document.getElementById("readbook").checked;

    // Add the book to the library and update the display
    addBookToLibrary(titlenameinputvalue, authornamevalue, pagesnumbervalue, bookreadvalue);
    updateLibraryDisplay();

    // Close the dialog box and reset the form fields after submission
    dialog.close();
    myform.reset();
});
