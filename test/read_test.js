const assert = require('assert');
const Book = require('../src/books');

describe('Test read book', () => {
    let book1;
    beforeEach((done) => {
        book1 = new Book({ title: "Game of thrones" });
        book1.save().then(() => {
            done();
        }).catch((error) => {
            console.log("Promise rejected", error);
        });
    })

    it('search a book', (done) => {
        Book.find({ title: "Game of thrones" }).then((books) => {
            //assert(books[0]._id === book1._id) //test de ladresse de lobject donc marche pas    
            assert(books[0]._id.equals(book1._id));
            done();
        }).catch((error) => {
            console.log("Promise rejected", error);
        })
    });


    it('search a book', (done) => {
        Book.findOne({ _id: book1._id }).then((book) => {
            assert(book._id.equals(book1._id));
            done();
        }).catch((error) => {
            console.log("Promise rejected", error);
        })
    });


})