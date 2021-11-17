/* eslint-disable camelcase */
const Smartphone = require('../models/smartphone')

// todo post to smartphones
const smartphone_create_post = (req, res) => {
  const userSmartphone = req.body
  const smartphone = new Smartphone(userSmartphone)
  smartphone.save().then((result) => {
    console.log(result)
    const item = result
    // send a success response
    res.json(item)
  }).catch((err) => {
    console.log(err)
    res.json({
      error: err,
      message: 'item may not exist'
    })
  })
}

const smartphones_get = (req, res) => {
  Smartphone.find().then((result) => {
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

const smartphone_detail = (req, res) => {
  const id = req.params.id
  Smartphone.findById(id).then((result) => {
    const item = result
    res.json(item)
  })
    .catch((err) => {
      console.log(err)
      res.json({
        error: err,
        message: 'error: no items found'
      })
    })
}

const smartphone_delete = (req, res) => {
  const id = req.params.id
  Smartphone.findByIdAndDelete(id).then((result) => {
    const deletedSmartphone = result
    // might not work, use res.json to redirect
    res.json(deletedSmartphone)
  }).catch((err) => {
    // preferably print "an error occured"
    console.log(err)
    res.json({
      error: err,
      message: 'item may not exist'
    })
  })
}

module.exports = {
  smartphone_create_post,
  smartphone_delete,
  smartphone_detail,
  smartphones_get
}
