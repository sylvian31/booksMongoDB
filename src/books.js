const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required:[true, 'A title is required']},
    totalPages: {type: Number, default:0}
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
