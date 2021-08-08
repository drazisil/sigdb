const { SigDB, loadSignatureDatabase } = require('../')
const tap = require('tap')

const sigDB = new SigDB()

tap.equal(
  sigDB.find(Buffer.from([0x21, 0x3c, 0x61, 0x72, 0x63, 0x68, 0x3e])).name,
  'ar archive',
)

tap.test('Signature Database', async t => {
  const sigs = await loadSignatureDatabase()
  tap.equal(
    sigs.find(Buffer.from([0x21, 0x3c, 0x61, 0x72, 0x63, 0x68, 0x3e])).name,
    'ar archive',
    'Can locate and match a file signature',
  )

  tap.equal(
    sigs.getSignatureNames().length,
    4,
    'Can get an array of file signatures',
  )

  sigs.addFileSignature('dummy1', 'dummySig', Buffer.alloc(3))
  tap.equal(sigs.getSignatureNames().length, 5, 'Can add a new file signature')
})
