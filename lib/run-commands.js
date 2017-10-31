'use strict'

const execa = require('execa')
const chalk = require('chalk')

module.exports = async function (commands = ['migrate']) {
  for (const command of commands) {
    try {
      await execa(command)
    } catch (err) {
      console.error(
        chalk.red(`Could not execute command ${command}.`, err.message)
      )
    }
  }
}
