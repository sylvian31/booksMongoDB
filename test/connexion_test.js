const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/books_test', {
        useNewUrlParser: true,
        useFindAndModify: false
    });

    mongoose.connection.once('open', () => {
        console.log("connexion etablie");
        done();
    }).on('error', (error) => {
        console.log("Erreur durant la connexion", error);
    });
})

beforeEach('Delete old books', (done) => {
    const { books, users } = mongoose.connection.collections;    
    books.drop(() => {
        users.drop( () => {
            done();
        })
    })
})
