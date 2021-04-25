const mongoose = require('mongoose')
require('dotenv').config()

// const connection = process.env.DB_URL

// mongoose
//   .connect(connection, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log('Successfully connected to MongoDB Atlas!'))
//   .catch((error) => {
//     console.log('Unable to connect to MongoDB Atlas!')
//     console.log(error)
//   })

async function dbConnect() {
  const connection = process.env.DB_URL

  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(process.env.DB_URL, {
      //   these are options to ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!')
      console.log(error)
    })
}

module.exports = dbConnect
