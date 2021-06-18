const { SigDB } = require('../lib')
const tap = require('tap')

const sigDB = new SigDB()

tap.equal(
  sigDB.find(Buffer.from([0x21, 0x3c, 0x61, 0x72, 0x63, 0x68, 0x3e])).name,
  'ar archive',
)
