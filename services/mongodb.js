require('dotenv').config();
const mongoose = require('mongoose');
const mongoDB = process.env.DATABASE_DEV;

module.exports = () => {
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    const db = mongoose.connection;
    db.on('error', (error) => {
        throw new Error(`Error conectando a mongo: ${error}`);
    });
    db.once('open', () => console.log(`Conectado a Mongo! `));
};
