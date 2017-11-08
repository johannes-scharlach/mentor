'use strict'

const { Signature } = require('nodegit')
const branchPrefix = 'mentor'

async function createBranch(repo, branchSegment) {
  const headCommit = await repo.getHeadCommit()

  const branch = await repo.createBranch(
    `${branchPrefix}/${branchSegment}`,
    headCommit,
    0
  )
  return repo.checkoutBranch(branch)
}

async function commitAll(repo, message) {
  const statuses = await repo.getStatus()

  const files = statuses.map(status => status.path())
  const author = Signature.default(repo)
  return repo.createCommitOnHead(files, author, author, message)
}

module.exports = async function(repo, branchSegment, message) {
  await createBranch(repo, branchSegment)
  return commitAll(repo, message)
}
