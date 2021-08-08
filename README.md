# sigdb
[![Node.js CI](https://github.com/drazisil/sigdb/actions/workflows/node.js.yml/badge.svg)](https://github.com/drazisil/sigdb/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/drazisil/sigdb/branch/main/graph/badge.svg?token=3z7i3oZk67)](https://codecov.io/gh/drazisil/sigdb)

A file signature database manager

## Usage

To install:

`npm install -E sigdb`

To use:

```javascript
const { createSignatureDatabase }= require('sigdb')
const sigdb = await createSignatureDatabase()
```

## Methods

```javascript
  /**
   * Provided a buffer of binary bytes, will return either the matching signature name as a string, or `undefined`
   *
   * @param {Buffer} haystack
   * @memberof SigDB
   * @returns FileSignatureRecord | undefined
   */
  find(haystack: Buffer): FileSignatureRecord | undefined
```

```javascript
  /**
   * Get an array of signature names in the database
   * @returns {string[]}
   */
  getSignatureNames(): string[] 
```