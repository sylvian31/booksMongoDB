const assert = require('assert');
const Book = require('../src/books');

describe('Create book', () => {
    it('Save a book', (done) => {
        const book1 = new Book({ title: "Game of thrones" });
        book1.save().then(() => {
            assert(!book1.isNew);
            done();
        });
    })
})