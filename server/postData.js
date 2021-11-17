const Pcm = require('./models/pc')
const Pcam = require('./models/pcAccessory')
const Smm = require('./models/smartphone')
const Smam = require('./models/smartphoneAccessory')

const pc = require('./itemsjson/pcDATA.json')
const pca = require('./itemsjson/pcaDATA.json')
const sm = require('./itemsjson/smDATA.json')
const sma = require('./itemsjson/smaDATA.json')

pc.forEach((item) => {
  // fix numbers modified to strings by jsonStringify
  item.cost = parseInt(item.cost)
  item.quantity = parseInt(item.quantity)
  const mpc = new Pcm(item)
  mpc
    .save()
    .then(() => {
      console.log('pc posted to MongoDB sucessfully')
    })
    .catch((err) => {
      console.log(err)
    })
})

pca.forEach((item) => {
  // fix numbers modified to strings by jsonStringify
  item.cost = parseInt(item.cost)
  item.quantity = parseInt(item.quantity)
  const mpca = new Pcam(item)
  mpca
    .save()
    .then((result) => {
      console.log('pca posted to MongoDB sucessfully')
    })
    .catch((err) => {
      console.log(err)
    })
})

sm.forEach((item) => {
  // fix numbers modified to strings by jsonStringify
  item.cost = parseInt(item.cost)
  item.quantity = parseInt(item.quantity)
  const msm = new Smm(item)
  msm
    .save()
    .then((result) => {
      console.log('sm posted to MongoDB sucessfully')
    })
    .catch((err) => {
      console.log(err)
    })
})

sma.forEach((item) => {
  // fix numbers modified to strings by jsonStringify
  item.cost = parseInt(item.cost)
  item.quantity = parseInt(item.quantity)
  const msma = new Smam(item)
  msma
    .save()
    .then((result) => {
      console.log('sma posted to MongoDB sucessfully')
    })
    .catch((err) => {
      console.log(err)
    })
})
