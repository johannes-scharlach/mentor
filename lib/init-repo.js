'use strict'

const { Repository, Branch } = require('nodegit')

async function checkIfDirty(repo) {
  const statuses = await repo.getStatus()

  for (let i = 0; i < statuses.length; i++) {
    const status = statuses[i]
    if (
      status.isModified() ||
      status.isTypechange() ||
      status.isRenamed() ||
      status.isIgnored()
    ) {
      return true
    }

    return false
  }
}

async function checkIfOnMaster(repo) {
  const headRef = await repo.getCurrentBranch()
  const branchName = await Branch.name(headRef)

  return branchName === 'master'
}

/**
 * Return the current repo. Throw if the current state is dirty.
 *
 * Should throw if
 * - [x] there are uncommitted changes (untracked files are OK)
 * - [x] the current branch isn't "master"
 * - [ ] there are untracked files
 * - [ ] we're in the middle of a merge
 * - [ ] we're in the middle of a rebase
 */
module.exports = async () => {
  const repo = await Repository.open('./.git')

  const isDirty = await checkIfDirty(repo)
  if (isDirty) {
    throw new Error(
      'The current repository is dirty. Stash or commit your current changes.'
    )
  }

  const isOnMaster = await checkIfOnMaster(repo)
  if (!isOnMaster) {
    throw new Error(
      `The current branch is not 'master'. Please change branches.`
    )
  }

  return repo
}
