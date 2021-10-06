const PcAccessory = require('../models/pcAccessory')
// post to pcAccessories

const pc_accessory_create_post = (req, res) => {
  const userAccessory = req.body
  const accessory = new PcAccessory(userAccessory)
  accessory
    .save()
    .then((result) => {
      console.log(result)
      const item = result
      //  send a success response
      //  {}
      res.render('ItemPostSuccess', {
        title: 'Pc Accessory post success',
        item,
        href: 'pcs-accessories'
      })
    })
    .catch((err) => console.log(err))
}

const pc_accessory_create_get = (req, res) => {
  res.render('createItem', {
    // data to send to createItem view
    title: 'Post new pc-accessory',
    formAction: '/pc-accessories',
    href: 'pcs-accessories'
  })
}

const pc_accessories_get = (req, res) => {
  PcAccessory.find()
    .then((result) => {
      const items = result
      res.render('itemList', {
        title: 'PC accessories',
        items,
        href: 'pcs-accessories'
      })
    })
    .catch((err) => console.log(err))
}

const pc_accessory_detail = (req, res) => {
  const id = req.params.id
  PcAccessory.findById(id)
    .then((result) => {
      const item = result
      res.render('itemDetail', {
        title: `${item.itemName} details page`,
        item,
        href: 'pcs-accessories'
      })
    })
    .catch((err) => {
      console.log(err)
      res.render('404')
    })
}

const pc_accessory_delete = (req, res) => {
  const id = req.params.id
  PcAccessory.findByIdAndDelete(id)
    .then((result) => {
      const deletedAccessory = result
      // might not work, use res.json to redirect
      res.json({ redirect: '/userItems', deletedAccessory })
    })
    .catch((err) => {
      // preferably print -an error occured
      console.log(err)
      res.render('404')
    })
}

module.exports = {
  pc_accessories_get,
  pc_accessory_create_get,
  pc_accessory_create_post,
  pc_accessory_delete,
  pc_accessory_detail
}
