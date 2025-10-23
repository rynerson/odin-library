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
function addBooksToLibrary(){
    //this is place_holder. Later I will implement this functionality in a form.
    const userTitle = "Green Eggs and Ham";
    const userAuthor= "Dr. Seuss";
    const userPages = "246";
    const userHasRead = "yes";
    
    const myBook = new Book(userTitle,userAuthor,userPages,userHasRead);

    myLibrary.push(myBook);

}
addBooksToLibrary();
addBooksToLibrary();
addBooksToLibrary();
for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const container = document.getElementById('container');
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        const title_p = document.createElement("p");
        title_p.textContent = "Title: "+ book.title;

        const author_p = document.createElement("p");
        author_p.textContent = "Author: " + book.author;

        const pages_p = document.createElement("p");
        pages_p.textContent = "Pages: " + book.pages;

        const has_read_p = document.createElement("p");
        has_read_p.textContent = "Read?: " + book.hasRead;

        const ID_P = document.createElement("p");
        ID_P.textContent = "Unique ID: " + book.bookID;

        bookCard.appendChild(title_p);
        bookCard.appendChild(author_p);
        bookCard.appendChild(pages_p);
        bookCard.appendChild(has_read_p);
        bookCard.appendChild(ID_P);
        container.appendChild(bookCard);
        
}