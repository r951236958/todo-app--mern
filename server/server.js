const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
con mongoose = require('mongoose')

// const database = require('./database/db')
const path = require('path')
const app = express();

require('./database');

app.use(bodyParser.json());
app.use(cors());

// mongoose.Promise = global.Promise

// mongoose
//   .connect(database.db, {
//     keepAlive: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(
//     () => {
//       console.log('Database connected sucessfully !')
//     },
//     (error) => {
//       console.log('Database could not be connected : ' + error)
//     }
//   )

const connection = mongoose.connection

connection.once('open', function () {
  console.log('MongoDB connection established.')
})

const userRoute = require('./routes/user.routes')
const lvRoute = require('./routes/lv.routes')
app.use('/users', userRoute)
app.use('/lv', lvRoute)

// API
// const users = require('/api/users');
// app.use('/api/users', users);

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});