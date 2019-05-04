const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: [true, 'A title is required'] },
    totalPages: {
        type: Number,
        default: 0,
        validate: {
            validator: (totalPages) => bookValidatorTotalPages(totalPages),
            message: 'un livre doit avoir moins de 3000 pages'
        }
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;


const bookValidatorTotalPages = (totalPages) => {
    return totalPages < 3000;
}
