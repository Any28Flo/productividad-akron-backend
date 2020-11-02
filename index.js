const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const initDB = require("./services/mongodb");
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const PORT = 8080 || process.env.PORT;

const app = express();

app.use(cors({
    credentials : true,
    origin: ['http://localhost:3000']
}));
app.use(bodyParser.json())

initDB()

app.use('/user', userRoutes);
app.use('/task', taskRoutes);

app.listen(PORT, () => {
    console.log(`🚀 app running on ${PORT}`)

})