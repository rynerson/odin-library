const myLibrary = [];
//the constructor
function Book(title, author, pages, hasRead){
      if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function(){
        let info = this.title+" by " + this.author+ ", "+pages+", "+hasRead;
        return info;
    }
    this.bookID = self.crypto.randomUUID();
}
//take params, create a book, and then store it in the library
function addBooksToLibrary(userTitle,userAuthor,userPages,userHasRead){
   
    const myBook = new Book(userTitle,userAuthor,userPages,userHasRead);

    myLibrary.push(myBook);
    displayBook(myBook);

}

function displayBook(book){
  const container = document.getElementById('container');
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");

  const title_p = document.createElement("p");
  title_p.textContent = "Title: " + book.title;

  const author_p = document.createElement("p");
  author_p.textContent = "Author: " + book.author;

  const pages_p = document.createElement("p");
  pages_p.textContent = "Pages: " + book.pages;

  const has_read_p = document.createElement("p");
  has_read_p.textContent = "Read?: " + book.hasRead;

  const ID_P = document.createElement("p");
  ID_P.textContent = "Unique ID: " + book.bookID;

  bookCard.append(title_p, author_p, pages_p, has_read_p, ID_P);
  container.appendChild(bookCard);

}
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages');
            const selectedRadio = document.querySelector('input[name="read_check"]:checked');
            if(selectedRadio){
              const readValue = selectedRadio.value;
              console.log("Selected option (JavaScript):", readValue);
              // Call a function to handle the data
            addBooksToLibrary(title,author,pages,readValue);
            }
        
            
        });