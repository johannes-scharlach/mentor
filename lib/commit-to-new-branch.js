'use strict'

const branchPrefix = 'mentor'

async function createBranch (repo, branchSegment) {
  const headCommit = await repo.getHeadCommit()

  return repo.createBranch(`${branchPrefix}/${branchSegment}`, headCommit, 0)
}

async function commitAll (repo) {}

module.exports = async function (repo, branchSegment, message) {
  await createBranch(repo, branchSegment)
  return commitAll(repo)
}
