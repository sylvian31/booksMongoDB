const assert = require('assert');
const User = require('../src/user');

describe('Test virtual type', () => {
    it('Test virtual type count books', (done) => {
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
                    assert(user.countBooks === 2);
                    done();
                })
        });


    })
})