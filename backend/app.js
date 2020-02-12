const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 

app.use(cors());
const port = 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const carsRouter = require('./routes/cars/cars');
app.use('/cars', carsRouter);

const usersRouter = require('./routes/users/users');
app.use('/users', usersRouter)

// app.use((err, req, res, next) => {
//     res.status(500).json({
//         err
//     })
// })


app.listen(port, () => console.log("Listening", port));
