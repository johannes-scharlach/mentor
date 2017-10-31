#!/usr/bin/env node
'use strict'

const yargs = require('yargs')
const chalk = require('chalk')

const getConfig = require('../lib/get-config.js')
const runCommands = require('../lib/run-commands.js')
const commitToNewBranch = require('../lib/commit-to-new-branch.js')
const initRepo = require('../lib/init-repo.js')

const { argv } = yargs
  .option('npm-commands', {
    desc: 'Commands that should be executed',
    type: 'array',
    alias: ['c', 'cmd']
  })
  .option('branch-segment', {
    desc:
      'At the end, this command will create a branch named mentor/<branch-segment>',
    default: 'migration',
    type: 'string',
    alias: 's'
  })

async function run () {
  try {
    const [repo, config] = await Promise.all([initRepo(), getConfig()])
    const commands = argv.npmCommands || (config ? config.npmCommands : void 0)
    await runCommands(commands)

    await commitToNewBranch(repo, argv.branchSegment, 'chore: migrate repo')
  } catch (err) {
    console.error(chalk.red(err, err.stack))
  }
}

run()
