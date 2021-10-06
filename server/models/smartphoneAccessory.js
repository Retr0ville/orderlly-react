const mongoose = require('mongoose')

const Schema = mongoose.Schema

const smartphoneAccessorySchema = new Schema(
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

const Smartphone_accessory = mongoose.model('Smartphone_accessory', smartphoneAccessorySchema)

module.exports = Smartphone_accessory
