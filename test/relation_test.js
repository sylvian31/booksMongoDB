const assert = require('assert');
const User = require('../src/user');

describe('Test de relation', () => {
    it('test the size book list from user', (done) => {
        const user1 = new User({
            name: 'sylvian',
            books: [
                { title: 'Lord of rings' },
                { title: 'Harry Potter' }
            ]
        })

        user1.save().then(() => {
            User.findOne({ name: 'sylvian' })
                .then((user) => {                  
                    assert(user.books.length === 2);
                    done();
                })
        });
    })


    it('test add book user ', (done) => {
        const user1 = new User({
            name: 'Peter',
        })

        user1.books.push({title: 'Lord of rings'})

        user1.save().then(() => {
            User.findOne({ name: 'Peter' })
                .then((user) => {                  
                    assert(user.books.length === 1);
                    done();
                })
        });
    })

    it('delete book from user', (done) => {
        const user1 = new User({
            name: 'Samuel',
            books: [
                { title: 'Lord of rings' },
                { title: 'Harry Potter' }
            ]
        })

        user1.books[0].remove();

        user1.save().then(() => {
            User.findOne({ name: 'Samuel' })
                .then((user) => {                  
                    assert(user.books.length === 1);
                    done();
                })
        });
    })
})