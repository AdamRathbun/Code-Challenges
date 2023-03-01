// Design a library using OOP

// Classes: Create classes for the library system's entities such as books, borrowers, and librarians.

// Inheritance: Use inheritance to model relationships between classes, such as creating a subclass for different types of books (fiction, non-fiction, etc.).

// Encapsulation: Ensure that the data of the library system's entities are properly encapsulated within their respective classes, with public interfaces for accessing and modifying the data.

// Polymorphism: Use polymorphism to enable objects of different classes to be used interchangeably, such as creating a method for checking out a book that can work with different types of books.

// Method Overriding: Consider using method overriding to customize behavior for specific subclasses. For example, a method for calculating the late fee for a book might have different rules for fiction and non-fiction books.

// Error Handling: Include error handling mechanisms to handle exceptions, such as when a book is already checked out or when a borrower tries to check out more books than they are allowed.

// User Interface: Design a user interface for the library system that interacts with the underlying classes and their methods.

// Book Class:
// Data: title, author, ISBN, publication date, genre, number of copies available, number of copies checked out.
//  Functionalities:
//  Check out a book
//  Return a book
//  Get information about a book
//  Update book information (e.g. number of copies available)
// Borrower Class:
//  Data: name, contact information, list of books currently checked out, maximum number of books allowed to be checked out at a time.
//  Functionalities:
//  Check out a book
//  Return a book
//  Get a list of currently checked out books
//  Update personal information (e.g. contact information)
// Librarian Class:
// Data: name, contact information, list of books in the library system.
//  Functionalities:
//  Add a book to the library system
//  Remove a book from the library system
//  Update book information (e.g. number of copies available)
//  Get a list of all books in the library system
//  Check out a book on behalf of a borrower
//  Return a book on behalf of a borrower

class Book{
    constructor(title, author, ISBN, publicationDate, genre, copiesTotal, copiesOut){
        this.title=title
        this.author=author
        this.ISBN=ISBN
        this.publicationDate=publicationDate
        this.genre=genre
        this.copiesTotal=copiesTotal
        this.copiesOut=copiesOut
        this.lateFee="$4"
        this.borrowers={}
    }
    checkOutBook(){
        if (this.copiesTotal===this.copiesOut){
            throw new Error('Not enough copies available.') 
        }else{
            this.copiesOut++
        }
    }
    returnBook(){
        this.copiesOut--
    }
    getBookInfo(){
        return `${this.title} is by ${this.author}, has ${this.ISBN} ISBN, ${this.publicationDate} publication date, ${this.genre} genre, and ${this.copiesOut} copies currently out from ${this.copiesTotal} copies total.`
    }
    update(current, currentTotal){
        this.copiesOut=current
        this.copiesTotal=currentTotal
    }
    getLateFee(){
        return `This is a LIGHT FEE of ${this.lateFee}.`
    }
}

class Fiction extends Book{
    constructor(title, author, ISBN, publicationDate, genre, copiesTotal, copiesOut, lateFee, borrowers){
        super(title, author, ISBN, publicationDate, genre, copiesTotal, copiesOut, lateFee, borrowers)
        this.genre='Fiction'
        this.lateFee='$5'
    }
    getBookInfo(){
        return super.getBookInfo()
    }
    getLateFee(){
        return `This is a MEDIUM FEE of ${this.lateFee}.`
    }
}

class NonFiction extends Book{
    constructor(title, author, ISBN, publicationDate, genre, copiesTotal, copiesOut, lateFee, borrowers){
        super(title, author, ISBN, publicationDate, genre, copiesTotal, copiesOut, lateFee, borrowers)
        this.genre='Non-fiction'
        this.lateFee='$7'
    }
    getBookInfo(){
        return super.getBookInfo()
    }
    getLateFee(){
        return `This is a HEAVY FEE of ${this.lateFee}.`
    }
}

class PersonInterface{
    constructor(name, contact){
        this.name=name
        this.contact=contact
    }
    updateContact(){
        throw new Error('Must implement method.')
    }
}

class Borrower extends PersonInterface{
    constructor(name, contact, maxBooks){
        super(name, contact)
        this.booksOut={}
        this.maxBooks=maxBooks
    }

    checkOutBook(book){
        let currentBooks = Object.keys(this.booksOut).length
        if (currentBooks===this.maxBooks){
            throw new Error('Max books out, need to return a book first.')
        }
        let borrowDate = new Date()
        this.booksOut[book.title]=book
        this.booksOut[book.title].borrowDate=borrowDate
    }

    returnBook(bookTitle){
        if (!this.booksOut[bookTitle]){
            throw new Error('This book has not been checked out by this person.')
        }
        let returnDate = new Date()
        let borrowDuration = ((returnDate.getTime() - this.booksOut[bookTitle].borrowDate.getTime())/1000)*60*60*24
        // console.log(borrowDuration)
        delete this.booksOut[bookTitle]
        // assume each book can be borrowed for up to 2 weeks (14 days)
        if (borrowDuration>14){
            return `You must pay a late fee. ${this.booksOut[bookTitle].getLateFee()}.`
        }else{
            return `Thanks for returning ${bookTitle}`
        } 
    }

    currentBooks(){
        return this.booksOut
    }

    updateContact(newContact){
        this.contact=newContact
    }
}

class Library{
    constructor(books){
        this.books=books
    }

    updateBookCopies(bookTitle, copies){
        let bookFound=false
        for (let key in this.books){
            if (this.books[key].title===bookTitle){
                this.books[key].copiesOut=copies
                bookFound=true
            }
        }
        if (!bookFound){
            throw new Error('No such book.')
        }
    }

    getBookInfo(bookTitle){
        for (let key in this.books){
            if (this.books[key].title===bookTitle){
                return this.books[key]
            }
        }
        throw new Error ('No such title.')
    }

    getAllBooksInfo(){
        return this.books
    }

    addBook(book){
        this.books[book]=book
    }

    removeBook(book){
        delete this.books[book]
    }

    checkOutBook(bookTitle, borrower){
        // note bookTitle can be easily switched with ISBN number, or with another similar method that uses ISBN instead
        let myBook = undefined
        for (let key in this.books){
            if (this.books[key].title===bookTitle){
                myBook=this.books[key]
            }
        }
        if (!myBook){
            throw new Error('No such title.')
        }
        if (myBook.copiesOut===myBook.copiesTotal){
            throw new Error('No more copies.')
        }
        myBook.copiesOut++
        myBook.borrowers[borrower.name]=borrower
        borrower.checkOutBook(myBook)
    }

    returnBook(bookTitle, borrower){
        const borrowerBook = Object.keys(borrower.booksOut).find(el=>borrower.booksOut[el].title===bookTitle)
        if (!borrowerBook ){
            throw new Error('They do not have the book.')
        }
        const myBook = undefined
        for (let key in this.books){
            if (this.books[key].title===bookTitle){
                myBook=this.books[key]
            }
        }
        if (!myBook){
            throw new Error('No such book.')
        }
        myBook.copiesOut--
        borrower.returnBook(myBook)
        delete myBook.borrowers[borrower.name]
    }

}

class Librarian extends PersonInterface{
    constructor(name, contact, library){
        super(name, contact)
        this.library=library
        this.bookList=library.books
    }

    updateBookCopies(book, copies){
        this.library.updateBookCopies(book, copies)
    }

    getBookInfo(book){
        this.library.getBookInfo(book)
    }

    getAllBooksInfo(){
        return this.bookList
    }

    addBook(book){
        this.library.addBook(book)
    }

    removeBook(book){
        this.library.removeBook(book)
    }

    checkOutBook(bookTitle, borrower){
        this.library.checkOutBook(bookTitle, borrower)
    }

    returnBook(bookTitle, borrower){
        this.library.returnBook(bookTitle, borrower)
    }

    updateContact(newContact){
        this.contact=newContact
    }
}

// test

const rise = new Fiction ('Rise', 'James Dinn', 10428304, '09-30-1987', 'Fiction', 10, 0)
const sky = new Fiction ('Sky', 'James Dinn', 10428315, '09-30-1989', 'Fiction', 8, 0)
const armament = new Fiction ('Armament', 'James Dinn', 10428336, '09-30-1991', 'Fiction', 7, 0)
const books = {rise, sky, armament}

let library1 = new Library(books)

let librarian1 = new Librarian('Sammy Salsa', 5132220930, library1)

let borrower1 = new Borrower('Alice Maxfield', 2129930192, 10)

// test borrowing a book

borrower1.checkOutBook(sky)
borrower1.currentBooks()

librarian1.checkOutBook(sky.title, borrower1)
library1.getBookInfo(sky.title)

borrower1.returnBook(sky.title)