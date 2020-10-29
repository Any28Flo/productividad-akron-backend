const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const initDB = require("./services/mongodb");
const taskRoutes = require('./middlewares/taskRoutes')
const PORT = 8080 || process.env.PORT;

const app = express();

app.use(cors({
    credentials : true,
    origin: ['http://localhost:3000']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


initDB()

app.use('/task', taskRoutes);

app.listen(PORT, () => {
    console.log(`🚀 app running on ${PORT}`)

})