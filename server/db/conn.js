const mongoose = require('mongoose');

const DB = "mongodb+srv://crud-app-mern-basic:Q1zCeoKNAp1XSYuP@cluster0.nnlp5.mongodb.net/crud_app?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("Connected to DB"); }).catch((error) => { console.log(error); });