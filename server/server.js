const express = require('express')
const mongoose = require('mongoose')
const pcRoutes = require('./routes/pcRoutes')
const pcAccessoryRoutes = require('./routes/pcAccessoryRoutes')
const smartphoneRoutes = require('./routes/smartphoneRoutes')
const smartphoneAccessoryRoutes = require('./routes/smartphoneAccessoryRoutes')
const cookieParser = require('cookie-parser')
// const logger = require('logger')
// const PcAccessory = require('./models/pcAccessory');

// init
const app = express()
const dbUri =
  'mongodb://Rtrvl:Sesameex1@cluster0-shard-00-00.zvqqc.mongodb.net:27017,cluster0-shard-00-01.zvqqc.mongodb.net:27017,cluster0-shard-00-02.zvqqc.mongodb.net:27017/Orderlly?ssl=true&replicaSet=atlas-itdc3i-shard-0&authSource=admin&retryWrites=true&w=majority'

// app.listen(5100, (err) => {
//   if (err) return console.log(err)
//   console.log('listening on port 5100...')
// })

// !connect after testing
mongoose
  .connect(dbUri)
  .then(() => {
    console.log('connected to MongodB')
    app.listen(5100, (err) => {
      if (err) return console.log(err)
      console.log('listening on port 5100...')
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

app.use('/pcs', pcRoutes)
app.use('/pc-accessories', pcAccessoryRoutes)
app.use('/smartphones', smartphoneRoutes)
app.use('/smartphone-accessories', smartphoneAccessoryRoutes)
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
