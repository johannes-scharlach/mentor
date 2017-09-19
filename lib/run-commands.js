'use strict'

const execa = require('execa')

module.exports = async function ({ npmCommands: commands = ['migrate'] } = {}) {
  for (let i = 0; i < commands.length; i++) {
    await execa(commands[i])
  }
}
