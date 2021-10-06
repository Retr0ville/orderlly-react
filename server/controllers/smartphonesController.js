const Smartphone = require('../models/smartphone')
// post to smartphones

const smartphone_create_post = (req, res) => {
  const userSmartphone = req.body
  const smartphone = new Smartphone(userSmartphone)
  smartphone.save().then((result) => {
    console.log(result)
    const item = result
    // send a success response
    // {}
    res.render('ItemPostSuccess', {
      title: 'Post new Smartphone success',
      item,
      href: 'smartphones'
    })
  }).catch(err => console.log(err))
}

const smartphone_create_get = (req, res) => {
  res.render('createItem', {
    // data to send to createItem view
    title: 'Post new Smartphone',
    formAction: '/smartphones',
    href: 'smartphones'
  })
}

const smartphones_get = (req, res) => {
  Smartphone.find().then((result) => {
    const items = result
    res.render('itemList', {
      // data to send to view
      title: 'smartphones',
      items,
      href: 'smartphones'
    })
  }).catch(err => console.log(err))
}

const smartphone_detail = (req, res) => {
  const id = req.params.id
  Smartphone.findById(id).then((result) => {
    const item = result
    res.render('itemDetail', {
      title: `${item.itemName} details page`,
      item,
      href: 'smartphones'
    })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}

const smartphone_delete = (req, res) => {
  const id = req.params.id
  Smartphone.findByIdAndDelete(id).then((result) => {
    const deletedSmartphone = result
    // might not work, use res.json to redirect
    res.json({ redirect: '/userItems', deletedSmartphone })
  }).catch((err) => {
    // preferably print -an error occured
    console.log(err)
    res.render('404')
  })
}

module.exports = {
  smartphone_create_get,
  smartphone_create_post,
  smartphone_delete,
  smartphone_detail,
  smartphones_get
}
