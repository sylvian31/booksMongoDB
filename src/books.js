const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    totalPages: {type: Number, default:0}
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
