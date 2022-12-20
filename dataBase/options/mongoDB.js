const mongoose = require('mongoose');

const URL = 'mongodb+srv://coderSegundaEntrega:chimuelo33@cluster0.felgak6.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
