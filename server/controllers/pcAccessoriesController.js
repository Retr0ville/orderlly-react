/* eslint-disable camelcase */
const PcAccessory = require('../models/pcAccessory')
// post to pcAccessories

const pc_accessory_create_post = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  const userAccessory = req.body
  const accessory = new PcAccessory(userAccessory)
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
      res.status(401).json({
        error: err,
        message: 'item could not be posted'
      })
    })
}

const pc_accessories_get = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  PcAccessory.find()
    .then((result) => {
      const items = result
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(404).json({
        error: err,
        message: "error: couldn't fetch items"
      })
    })
}

const pc_accessory_detail = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  const id = req.params.id
  PcAccessory.findById(id)
    .then((result) => {
      const item = result
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
      res.status(404).json({
        error: err,
        message: 'error: no items found'
      })
    })
}

const pc_accessory_delete = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  const id = req.params.id
  PcAccessory.findByIdAndDelete(id)
    .then((result) => {
      const deletedAccessory = result
      res.json(deletedAccessory)
    })
    .catch((err) => {
      // preferably print "an error occured"
      console.log(err)
      res.status(404).json({
        error: err,
        message: 'item may not exist'
      })
    })
}

module.exports = {
  pc_accessories_get,
  pc_accessory_create_post,
  pc_accessory_delete,
  pc_accessory_detail
}
