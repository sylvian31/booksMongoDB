const assert = require('assert');
const Book = require('../src/books');

describe('Test update book', () => {
    let book1;
    let newTitle = 'Le seigneur des anneaux';
    beforeEach((done) => {
        book1 = new Book({ title: "Game of thrones" });
        book1.save().then(() => {
            done();
        });
    })

    function assertTitle(promise, done) {
        promise.then(() => {
            Book.findOne({}).then((book) => {
                assert(book.title === newTitle);
                done();
            })
        }).catch((error) => {
            console.log("Promise rejected", error);
        })
    }

    it('update a book from instance', (done) => {
        book1.set('title', newTitle);
        assertTitle(book1.save(), done);
    });

    it('update a book from model', (done) => {
        assertTitle(Book.updateOne({ title: 'Game of thrones' }, { title: newTitle }), done);
    });

    it('find one by title and update (findOneAndUpdate)', (done) => {
        assertTitle(Book.findOneAndUpdate({ title: 'Game of thrones' }, { title: newTitle }), done);
    })

    it('find one by id and update (findByIdAndUpdate)', (done) => {
        assertTitle(Book.findByIdAndUpdate(book1._id, { title: newTitle }), done);
    })

    it('find a book and increment pages', (done) => {
        Book.updateOne({ title: 'Game of thrones' }, { $inc: { totalPages: 3 } })
            .then(() => {
                Book.findOne({ title: 'Game of thrones' })
                    .then((book) => {
                        assert(book.totalPages === 3);
                        done();       
                    })
            }).catch((error) => {
                console.log("Promise rejected", error);
            });
    })

})