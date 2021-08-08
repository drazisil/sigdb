// @ts-check

/**
 * @module SigDB
 * @namespace SigDB
 */

/**
 * @typedef FileSignatureRecord
 * @property {Buffer} signature
 * @property {String} name
 */

/** Class for manager file signatures (sometimes known as magic numbers) */
class SigDB {
  constructor() {
    /** @type {FileSignatureRecord[]} */
    this.fileSignatures = [
      {
        signature: Buffer.from([0x21, 0x3c, 0x61, 0x72, 0x63, 0x68, 0x3e]),
        name: 'ar archive',
      },
      {
        signature: Buffer.from([0xcf, 0xfa, 0xed, 0xfe]),
        name: 'mac executable',
      },
      {
        signature: Buffer.from([0x7f, 0x45, 0x4c, 0x46]),
        name: 'elf executable',
      },
      {
        signature: Buffer.from([0x4d, 0x5a]),
        name: 'dos mz executable',
      },
    ]
  }

  /**
   * Provided a buffer of binary bytes, will return either the matching signature name as a string, or `undefined`
   *
   * @param {Buffer} haystack
   * @memberof SigDB
   * @returns FileSignatureRecord | undefined
   */
  find(haystack) {
    return this.fileSignatures.find(sig => {
      return sig.signature.equals(haystack.slice(0, sig.signature.length))
    })
  }

  /**
   * Get an array of signature names in the database
   * @returns {string[]}
   */
  getSignatureNames() {
    const results = []
    for (const entry of this.fileSignatures) {
      results.push(entry.name)
    }
    return results
  }
}

async function loadSignatureDatabase() {
  return new SigDB()
}

module.exports = {
  SigDB,
  loadSignatureDatabase,
}
