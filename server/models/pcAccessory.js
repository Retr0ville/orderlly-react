const mongoose = require('mongoose')

const Schema = mongoose.Schema
const pcAccessorySchema = new Schema(
  {
    itemName: {
      required: true,
      type: String
    },
    img: {
      type: String
    },
    // userId: {
    //   type: String,
    //   required: true
    // },
    description: {
      required: true,
      type: String
    },
    itemStatus: {
      type: String
    },
    cost: {
      required: true,
      type: Number
    }
  }, { timestamps: true }
)

const Pc_accessory = mongoose.model('pc_Accessory', pcAccessorySchema)

module.exports = Pc_accessory
