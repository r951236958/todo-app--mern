const mongoose = require('mongoose')
require('dotenv').config()

const connection = process.env.DB_URL

mongoose.Promise = global.Promise

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected Successfully!'))
  .catch((err) => console.log('DB could not be connected : ' + err))

  const connection = mongoose.connection

  connection.once('open', function () {
    console.log('MongoDB connection established.')
  })