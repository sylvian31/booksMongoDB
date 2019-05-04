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

    it('a book must be less than 3000 pages ', (done) => {
        const book1 = new Book({ title: 'Game of thrones', totalPages: 3001 });
        book1.validate((validationResult) => {          
            assert.ok(validationResult);
            const { message } = validationResult.errors.totalPages;
            assert(message === 'un livre doit avoir moins de 3000 pages');
            done();
        }); // validate asynchrone    

    })
})