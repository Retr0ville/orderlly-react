/* eslint-disable camelcase */
const SmartphoneAccessory = require('../models/smartphoneAccessory')
// post to pcAccessories

const smartphone_accessory_create_post = (req, res) => {
  const userAccessory = req.body
  const accessory = new SmartphoneAccessory(userAccessory)
  accessory
    .save()
    .then((result) => {
      console.log(result)
      const item = result
      //  send a success response
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
      res.json({
        error: err,
        message: 'item may not exist'
      })
    })
}

const smartphone_accessories_get = (req, res) => {
  SmartphoneAccessory.find()
    .then((result) => {
      const items = result
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.json({
        error: err,
        message: "error: couldn't fetch items"
      })
    })
}

const smartphone_accessory_detail = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findById(id)
    .then((result) => {
      const item = result
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
      res.json({
        error: err,
        messege: 'error: no items found'
      })
    })
}

const smartphone_accessory_delete = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findByIdAndDelete(id)
    .then((result) => {
      const deletedAccessory = result
      res.json(deletedAccessory)
    })
    .catch((err) => {
      // preferably print "an error occured"
      console.log(err)
      res.json({
        error: err,
        message: 'item may not exist'
      })
    })
}

module.exports = {
  smartphone_accessories_get,
  smartphone_accessory_create_post,
  smartphone_accessory_delete,
  smartphone_accessory_detail
}
