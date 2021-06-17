// @ts-check

/**
 * @module SigManager
 * @namespace SigManager
 */

/**
 * @typedef FileSignatureRecord
 * @property {Buffer} signature
 * @property {String} name
 */

/** Class for manager file signatures (sometimes known as magic numbers) */
class SigManager {
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
   *
   * @param {Buffer} haystack
   * @memberof
   * @returns FileSignatureRecord
   */
  find(haystack) {
    return this.fileSignatures.find(sig => {
      return sig.signature.equals(haystack.slice(0, sig.signature.length))
    })
  }
}

module.exports = {
  SigManager,
}
