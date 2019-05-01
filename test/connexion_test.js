const mongoose = require('mongoose');


before( (done) => {
    mongoose.connect('mongodb://localhost/books_test', {
        useNewUrlParser: true 
    });
    
    mongoose.connection.once('open', () => {
        console.log("connexion etablie");
        done();
    }).on('error', (error) => {
        console.log("Erreur durant la connexion", error);
    });
})

beforeEach('Delete old books', (done) => {
    const {books} = mongoose.connection.collections;
    books.drop( () => {
        done();
    })
})
