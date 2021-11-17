const fs = require('fs')
const pc = require('../server/itemsjson/pc.json')
const pca = require('../server/itemsjson/pca.json')
const sm = require('../server/itemsjson/sm.json')
const sma = require('../server/itemsjson/sma.json')

// fischer-yates shuffler
function shuffle (array) {
  let m = array.length; let t; let i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
// last term or number of items = 4*2^(n)
// fn to expand the mini-json array
function expand (array = [], n = 4) {
  let aa = array

  for (let i = 0; i < n; i++) {
    const na = shuffle(aa)
    aa = aa.concat(na) // concat returns a new array
  }
  return aa
}

const p = JSON.stringify(expand(pc, 4))
const pa = JSON.stringify(expand(pca, 4))
const s = JSON.stringify(expand(sm, 4))
const sa = JSON.stringify(expand(sma, 4))

const pcWriteStream = fs.createWriteStream('./itemsjson/pcDATA.json')
const pcaWriteStream = fs.createWriteStream('./itemsjson/pcaDATA.json')
const smWriteStream = fs.createWriteStream('./itemsjson/smDATA.json')
const smaWriteStream = fs.createWriteStream('./itemsjson/smaDATA.json')

pcWriteStream.write(p, (err) => {
  if (err) console.log(err)
  else console.log('pc write complete')
})
pcaWriteStream.write(pa, (err) => {
  if (err) console.log(err)
  else console.log('pca write complete')
})
smWriteStream.write(s, (err) => {
  if (err) console.log(err)
  else console.log('sm write complete')
})
smaWriteStream.write(sa, (err) => {
  if (err) console.log(err)
  else console.log('sma write complete')
})
// console.log(p, p.length)
