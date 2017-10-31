'use strict'

const cosmiconfig = require('cosmiconfig')
const explorer = cosmiconfig('mentor')

module.exports = async function () {
  const result = await explorer.load(process.cwd())
  return result ? result.config : null
}
