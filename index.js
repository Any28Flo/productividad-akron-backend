const express = require ('express');
const initDB = require("./services/mongodb");

const app = express();

const PORT = 8080 || process.env.PORT;

initDB()

app.listen(PORT, () => {
    console.log(`🚀 app running on ${PORT}`)

})