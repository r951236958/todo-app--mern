const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lvSchema = new Schema(
  {
    lv: {
      type: Number,
      default: 260,
    },
    four: {
      type: Number,
      default: false,
      required: true,
    },
    up3: {
      type: Boolean,
      default: false,
    },
    five: {
      type: Number,
      default: false,
      required: true,
    },
    up5: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: 'lv',
  }
)

module.exports = mongoose.model('Lv', lvSchema)
