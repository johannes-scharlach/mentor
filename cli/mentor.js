#!/usr/bin/env node
'use strict'

const getConfig = require('../lib/get-config.js')
const runCommands = require('../lib/run-commands.js')
const commitToNewBranch = require('../lib/commit-to-new-branch.js')
const initRepo = require('../lib/init-repo.js')

async function run () {
  const [repo, config] = await Promise.all([initRepo(), getConfig()])
  await runCommands(config || void 0)

  await commitToNewBranch(repo, 'migration', 'chore: migrate repo')
}

run()
