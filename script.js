const myLibrary = [];
//the constructor
class Book{
  constructor(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.bookID = self.crypto.randomUUID();

  }
  info(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.hasRead}`;
  }
}

/*function to toggle the read state of the books*/
Book.prototype.ReadToggle = function(cardElement){
         const toggle = cardElement.querySelector('.read_toggle');
         const readP = cardElement.querySelector('.has_read');
         
        if(this.hasRead == "yes"){
            toggle.textContent = "Not Read";
            this.hasRead = "no";

         }
         else{
            toggle.textContent = "Read";
            this.hasRead = "yes";
         }
         readP.textContent = "Read?: " + this.hasRead;
            
        

    }

//take params, create a book, and then store it in the library
function addBooksToLibrary(userTitle,userAuthor,userPages,userHasRead){
   
    const myBook = new Book(userTitle,userAuthor,userPages,userHasRead);

    myLibrary.push(myBook);
    displayBook(myBook);

}
/*function for displaying a new book card */
function displayBook(book){
  const container = document.getElementById('container');
  const bookCard = document.createElement("div");
  bookCard.classList.add("card");
  bookCard.dataset.id = book.bookID;

  const title_p = document.createElement("p");
  title_p.textContent = "Title: " + book.title;

  const author_p = document.createElement("p");
  author_p.textContent = "Author: " + book.author;
  

  const pages_p = document.createElement("p");
  pages_p.textContent = "Pages: " + book.pages;

  const has_read_p = document.createElement("p");
  has_read_p.textContent = "Read?: " + book.hasRead;
  has_read_p.classList.add("has_read");

  const ID_P = document.createElement("p");
  ID_P.textContent = "Unique ID: " + book.bookID;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Book";
  removeBtn.classList.add("remove_btn")
  removeBtn.addEventListener("click", () => removeBook(book.bookID));

  const readButton = document.createElement("button");
  if(book.hasRead == "yes"){
      readButton.textContent = "Read";
   
  }
  else{
    readButton.textContent = "Not Read";
    
  }
  readButton.classList.add("read_toggle");
  readButton.addEventListener("click", ()=>book.ReadToggle(bookCard));

  bookCard.append(title_p, author_p, pages_p, has_read_p, ID_P);
  bookCard.appendChild(removeBtn);
  bookCard.appendChild(readButton);
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
//get the information to be put in a card
form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages').value;
            const selectedRadio = document.querySelector('input[name="read_check"]:checked');
            if(selectedRadio){
              const readValue = selectedRadio.value;
              console.log("Selected option (JavaScript):", readValue);
              // Call a function to handle the data
            addBooksToLibrary(title,author,pages,readValue);
            }
        
            
        });


function removeBook(id){
    //remove book from array
    const index = myLibrary.findIndex(book => book.bookID === id);
      if (index !== -1) {
          myLibrary.splice(index, 1);
        }
      //remove book from DOM
      const container = document.getElementById("container");
      const cardToRemove = container.querySelector(`[data-id="${id}"]`);
      if (cardToRemove) {
        cardToRemove.remove();
      }


      }
        