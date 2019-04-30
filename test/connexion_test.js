const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books_test', {
    useNewUrlParser: true 
});

mongoose.connection.once('open', () => {
    console.log("connexion etablie")
}).on('error', (error) => {
    console.log("Erreur durant la connexion", error);
});
