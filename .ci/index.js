const octokit = require('@octokit/rest')()

const TRAVIS_PULL_REQUEST = process.env.TRAVIS_PULL_REQUEST
const TRAVIS_PULL_REQUEST_SHA = process.env.TRAVIS_PULL_REQUEST_SHA
const owner = 'react-native-training'
const repo = 'react-native-elements'

async function commentPullRequest() {
  // Synchronous, just set the credentials
  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  })

  // Get the comments of the pull request
  const result = await octokit.issues.getComments({
    owner,
    repo,
    page: 1,
    number: TRAVIS_PULL_REQUEST,
    per_page: 100 // This is the maximum. Hopefully, the CI comment should be there
  })

  // Set the body of the comment
  const expo_url = `https://exp.host/@rn-elements/react-native-elements-app?release-channel=${TRAVIS_PULL_REQUEST_SHA}`
  const qr_code_url = `![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${expo_url})`
  const body = `Example app for the last commit (${TRAVIS_PULL_REQUEST_SHA}):\n\n${qr_code_url}\n\n${expo_url}`

  // If there is already a CI comment, just update it, if no, comment the PR
  const comment = result.data.find(comment => comment.user.login === 'react-native-elements-ci');
  if (comment != null) {
    // Update comment
    const result = await octokit.issues.editComment({
      owner,
      repo,
      id: comment.id,
      body,
    })
    console.log(`Updated comment #${comment.id}`)
  }
  else {
    // Post new comment
    const result = await octokit.issues.createComment({
      owner,
      repo,
      number: TRAVIS_PULL_REQUEST,
      body,
    })
    console.log("Posted new comment")
  }
}

commentPullRequest()
