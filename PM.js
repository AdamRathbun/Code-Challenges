// Power Monitorts 

// OOP
// Build a set of classes that encapsulates a library of books, magazines, etc.
// will need to sort by author, publisher, ISBN, Title

class Library{

    constructor(books){
        this.books=books
    }

    // search

    // withdraw

    // deposit

}

let lib1 = new Library(books1)


// class Book{
//     constructor(title, author, genre, ISBN, publisher){
//         this.title=title
//         this.author=author
//         this.genre=genre
//         this.ISBN=ISBN
//         this.publisher=publisher
//     }

// }

let liesOfLockeLamorra = new Book('The Lies of Locke Lamorra', 'Billy Bob', 'fantasy', 20204749190, 'Penguin')

// is there a better way to search current books, like what if I made mistakes while searching the genre

// trim(), toLowerCase(), 

// enumerations
// let's say fantasy: 1, sciFi: 2, action: 3, drama: 4

// 6.10, looking back on enums. Could this have been what he was looking for?
// const genres=Object.freeze({
//     scienceFiction: 'science fiction',
//     action: 'action',
//     drama: 'drama',
// })

// enumeration. OOP.
// Object.freeze() if we wanted to, but we might want to add more genres first
const bookGenres={
    action: 'action',
    drama: 'drama',
    fantasy: 'fantasy'
} 

class Book{
    constructor(title, author, genre, ISBN, publisher){
        this.title=title
        this.author=author
        this.genre=genre
        this.ISBN=ISBN
        this.publisher=publisher
    }

}

class Library{
    constructor(books){
        this.books=books
    }

    searchGenre(genre){
        let myGenre=genre.toLowerCase()
        if (!Object.values(bookGenres).includes(myGenre)){
            throw new Error('Invalid genre. Please type a valid genre.')
        }else{
            return this.books.filter(book=>book.genre===myGenre)
        }
    }
}

// test:
let book1 = new Book('The Lies of Locke Lamorra', 'Billy Bob', 'fantasy', 20204749190, 'Penguin')
let book2 = new Book('Red Seas Under Red Skies', 'Billy Bob', 'fantasy', 20204749222, 'Penguin')
let book3 = new Book('To Kill a Mocking Bird', 'Harper Lee', 'drama', 3020474990, 'Penguin')
let book4 = new Book('Die Hard the Movie the Book', 'Sansa Liptons', 'action', 90204711190, 'Cat')
let book5 = new Book('Harry Potter', 'Rowling', 'fantasy', 60204339190, 'Dog')

let books1 = [book1, book2, book3, book4, book5]
let lib3 = new Library(books1)
console.log(lib3.searchGenre('romance'))
console.log(lib3.searchGenre('fantasy'))





class User{
// contact, bookList, late fees

    constructor(){
        // contact
    }

    withdraw(){
        throw new Error('No withdraw function.')
    }

}

class Librarian extends User{
    constructor(){

    }

    withdraw(){
        // decrement count of books
    }
}

class Borrower extends User{
    constructor(){

    }

    withdraw(){
        // add book to collection
        // do new Date
    }

    return(){
        // check duration
        // might get late fee
    }
}

class Contact{
    constructor(firstName, lastName, email, phone, address){
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
    }
}

class Address{
    constructor(street, zipCode, city, country){
        // this.street=street
    }
}

class PhoneNumber{
    // home: 444-555-2222
    // mobile: 222-333-444
}


// we have users, I chose inheritance. We have borrowers and librarians, the composition people say we have one user, and an attribute of
// the user class that defines what their role is, whether borrower or librarian
// the question is which of the two: inheritance vs composition?


// method overload & method override

// special borrower
class Donor extends Borrower{
    // constructor

    withdraw(){
        // don't even do borrow date
    }
}


// at run time, with an old library, and the application poops the bed, and it has to do with the withdraw method
// interface

// let's say the library is shutting down and we're selling our collection.
// However, some books belong to a set and must be sold as such, how can we encapsulate the idea of sets of books

// if (book.count>10){
//     decrement
// }else{
        // console.log('must sell collection')
// }

// sellCollection(collectionObj){
//     for (let book in collectionObj){
//         collectionObj[book].count--
//     }
// }


// Caleb was thinking of extending Volume class but my way is fine as well


