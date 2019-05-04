const assert = require('assert');
const Book = require('../src/books');

describe('Test validation book', () => {
    it('a title must required', (done) => {
        const book1 = new Book({ title: undefined });
        const validationResult = book1.validateSync(); // validate synchrone    
        const { message } = validationResult.errors.title;
        assert(message === 'A title is required');
        done();
    })
})