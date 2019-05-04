const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../src/user');
const BlogBook = require('../src/blogBook');
const Comment = require('../src/comments');

describe('Test middleware', () => {
    it('Test than the books are deleted if user is remove', (done) => {

        user = new User({
            name: 'sylvian'
        });

        blogBook = new BlogBook({
            title: 'Game of thrones',
            summary: 'sexe, violence and magic'
        })

        comment = new Comment({
            content: 'I love Daenerys !'
        })

        user.blogBooks.push(blogBook);
        blogBook.comments.push(comment);
        comment.user = user;

        Promise.all([user.save(), blogBook.save(), comment.save()]).then(() => {
            user.remove().then(() => {
                BlogBook.countDocuments().then((count) => {
                    console.log('nb --------', count);
                    
                    assert(count === 0);
                    done();
                })
            })
        }).catch((error) => {
            console.log("Promise rejected", error);
        });

    })
})

