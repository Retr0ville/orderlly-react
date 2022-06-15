require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const pcRoutes = require('./routes/pcRoutes')
const pcAccessoryRoutes = require('./routes/pcAccessoryRoutes')
const smartphoneRoutes = require('./routes/smartphoneRoutes')
const smartphoneAccessoryRoutes = require('./routes/smartphoneAccessoryRoutes')
const cookieParser = require('cookie-parser')
// const logger = require('logger')
// const PcAccessory = require('./models/pcAccessory');

// init
const app = express()
const dbUri = process.env.MONGODB_URI
const PORT = process.env.PORT || 5100

// app.listen(5100, (err) => {
//   if (err) return console.log(err)
//   console.log('listening on port 5100...')
// })

// !connect before listening
mongoose
  .connect(dbUri)
  .then(() => {
    console.log('connected to MongodB')
    app.listen(PORT, (err) => {
      if (err) return console.log(err)
      console.log(`listening on port ${PORT}...`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

// statics and middlewares
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
// app.use(logger('dev'))

// views

// app.get('/', (req, res) => {
//   // res.render('index', {
//   //   title: 'Home'
//   // })
// })

app.use('/api/pcs', pcRoutes)
app.use('/api/pc-accessories', pcAccessoryRoutes)
app.use('/api/smartphones', smartphoneRoutes)
app.use('/api/smartphone-accessories', smartphoneAccessoryRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
// const testPost = new PcAccessory({
//   itemName :'qqq',
//   description: 'eee',
//   itemStatus: 'ccc',
//   cost: 20
// });
// testPost.save().then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });
