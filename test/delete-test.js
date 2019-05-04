const assert = require('assert');
const Book = require('../src/books');

describe('Test delete book', () => {
    let book1;
    beforeEach((done) => {
        book1 = new Book({ title: 'Game of thrones' });
        book1.save().then(() => {
            done();
        });
    })

    function assertDelete(promise, done) {
        promise.then(() => {
            Book.find({ title: 'Game of thrones' }).then((book) => {
                console.log(book);
                
                assert(0 === book.length);
                done();
            })
        }).catch((error) => {
            console.log("Promise rejected", error);
        })
    }

    it('delete a book by instance', (done) => {
        assertDelete(book1.deleteOne(), done);
    });


    it('delete a book by model', (done) => {
        assertDelete(Book.deleteOne({ title: 'Game of thrones' }), done);
    });

    it('delete a book by findOneAndRemove', (done) => {
        assertDelete(Book.findOneAndDelete({ title: 'Game of thrones' }), done);
    });

    it('delete a book by findByIdAndRemove', (done) => {
        assertDelete(Book.findByIdAndDelete(book1._id), done);
    });


})