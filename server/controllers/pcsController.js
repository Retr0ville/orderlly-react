const Pc = require('../models/pc')
// post to pcs

const pc_create_post = (req, res) => {
  const data = req.body
  res.json(data)
  console.log('received post req', data)
  // const userPc = req.body
  // const pc = new Pc(userPc)
  // pc.save().then((result) => {
  //   console.log(result)
  //   const item = result
  //   // send a success response
  //   // {}
  //   res.render('ItemPostSuccess', {
  //     title: 'Pc post Success',
  //     item,
  //     href: 'pcs'
  //   })
//   }).catch(err => console.log(err))
}

const pc_create_get = (req, res) => {
  res.render('createItem', {
    // data to send to createItem view
    title: 'Post new Pc',
    formAction: '/pcs',
    href: 'pcs'
  })
}

const pcs_get = (req, res) => {
  console.log('received get req')
  res.json(
    {
      key: 'key1'
    }
  )
  // Pc.find().then((result) => {
  //   const items = result
  //   res.render('itemList', {
  //     // data to send to view
  //     title: 'PCs for sale',
  //     items,
  //     href: 'pcs'
  //   })
  // }).catch(err => console.log(err))
}

const pc_detail = (req, res) => {
  const id = req.params.id
  Pc.findById(id).then((result) => {
    const item = result
    res.render('itemDetail', {
      title: `${item.itemName} details page`,
      item,
      href: 'pcs'
    })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}

const pc_delete = (req, res) => {
  const id = req.params.id
  Pc.findByIdAndDelete(id).then((result) => {
    const deletedpc = result
    // might not work, use res.json to redirect
    res.json({ redirect: '/userItems', deletedpc })
  }).catch((err) => {
    // preferably print -an error occured
    console.log(err)
    res.render('404')
  })
}

module.exports = {
  pc_create_get,
  pc_create_post,
  pc_delete,
  pc_detail,
  pcs_get
}
