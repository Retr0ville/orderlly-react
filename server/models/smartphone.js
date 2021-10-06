const mongoose = require('mongoose')

const Schema = mongoose.Schema

const smartphoneSchema = new Schema(
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

const Smartphone = mongoose.model('Smartphone', smartphoneSchema)

module.exports = Smartphone
