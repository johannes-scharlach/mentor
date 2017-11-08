'use strict'

const execa = require('execa')
const R = require('ramda')

const cleanRows = rows => {
  return rows.slice(2, rows.length - 2)
}

const getPackageNames = R.map(R.pipe(R.split(' '), R.head))

module.exports = async function() {
  try {
    await execa.shell('yarn outdated')
    // if it passes, nothing is outdated
    return null
  } catch ({ stdout }) {
    const rows = cleanRows(stdout.split('\n'))

    return getPackageNames(rows)
  }
}
