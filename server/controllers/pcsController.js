/* eslint-disable camelcase */
const Pc = require('../models/pc')

// todo post to pcs
const pc_create_post = (req, res) => {
  // const data = req.body
  // console.log('received post req', data)
  const userPc = req.body
  const pc = new Pc(userPc)
  pc.save()
    .then((result) => {
      console.log(result)
      const item = result
      // send a success response
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

const pcs_get = (req, res) => {
  console.log('received get req')
  res.set('Access-Control-Allow-Origin', '*')
  Pc.find()
    .then((result) => {
      const items = result
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({
        error: err,
        message: "error: couldn't fetch items"
      })
    })
}

const pc_detail = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  const id = req.params.id
  Pc.findById(id)
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

const pc_delete = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  const id = req.params.id
  Pc.findByIdAndDelete(id)
    .then((result) => {
      const deletedpc = result
      res.json(deletedpc)
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
  pc_create_post,
  pc_delete,
  pc_detail,
  pcs_get
}
