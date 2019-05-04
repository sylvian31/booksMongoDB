const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../src/user');
const BlogBook = require('../src/blogBook');
const Comment = require('../src/comments');

describe('Test reference', () => {
    let user, blogBook, comment;

    beforeEach((done) => {
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

        Promise.all([user.save(), blogBook.save(), comment.save()])
            .then(() => {
                done();
            }).catch((error) => {
                console.log("Promise rejected", error);
            });
    })

    it('Test the title book of user', (done) => {
        User.findOne({ name: 'sylvian' }).populate('blogBooks').then((user) => {
            assert(user.blogBooks[0].title === 'Game of thrones');
            done();
        })
    })


    it('Test for found comments of user', (done) => {
        User.findOne({ name: 'sylvian' }).populate({
            path: 'blogBooks',
            populate: {
                path: 'comments',
                model: 'comment'
            }
        }).then((user) => {
            assert(user.blogBooks[0].comments[0].content === 'I love Daenerys !');
            done();
        })
    })
})