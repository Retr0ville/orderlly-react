const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pcSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    // userId: {
    //   type: String,
    //   required: true
    // },
    description: {
      type: String,
      required: true
    },
    itemStatus: {
      type: String
    },
    cost: {
      type: Number,
      required: true
    }

  }, { timestamps: true }
)

const Pc = mongoose.model('Pc', pcSchema)

module.exports = Pc
