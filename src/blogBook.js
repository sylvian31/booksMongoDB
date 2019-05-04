const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogBookSchema = new Schema({
    title: String,
    summary: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]

});

const BlogBook = mongoose.model('blogBook', BlogBookSchema);

module.exports = BlogBook;


