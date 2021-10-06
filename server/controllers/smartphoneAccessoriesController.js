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
      //  {}
      res.render('ItemPostSuccess', {
        title: 'Smartphone Accessory post success',
        item,
        href: 'smartphone-accessories'
      })
    })
    .catch((err) => console.log(err))
}

const smartphone_accessory_create_get = (req, res) => {
  res.render('createItem', {
    // data to send to createItem view
    title: 'Post new Smartphone Accessory',
    formAction: '/smartphone-accessories',
    href: 'smartphone-accessories'
  })
}

const smartphone_accessories_get = (req, res) => {
  SmartphoneAccessory.find()
    .then((result) => {
      const items = result
      res.render('itemList', {
      // data to send to view
        title: 'Smartphone accessories',
        items,
        href: 'smartphone-accessories'
      })
    })
    .catch((err) => console.log(err))
}

const smartphone_accessory_detail = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findById(id)
    .then((result) => {
      const item = result
      res.render('itemDetail', {
        title: `${item.itemName} details page`,
        item,
        href: 'smartphone-accessories'
      })
    })
    .catch((err) => {
      console.log(err)
      res.render('404')
    })
}

const smartphone_accessory_delete = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findByIdAndDelete(id)
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
  smartphone_accessories_get,
  smartphone_accessory_create_get,
  smartphone_accessory_create_post,
  smartphone_accessory_delete,
  smartphone_accessory_detail
}
