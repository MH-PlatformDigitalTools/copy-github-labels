var copyGitHubLabels = require('copy-github-labels')();

var startupError = false;

if (!process.env.GITHUB_TOKEN) {
  console.log('Please specify the GITHUB_TOKEN environment variable.');
  console.log('Example:');
  console.log('  GITHUB_TOKEN=abcdefgh1234567890 node ./copy-github-labels');
  startupError = true;
}

var sourceRepo = process.argv[2];
var destRepo = process.argv[3];

if (!sourceRepo) {
  console.log('Please specify the source repo.');
  startupError = true;
}

if (!destRepo) {
  console.log('Please specify the destination repo.');
  startupError = true;
}

if (startupError) {
  console.log('USAGE:');
  console.log('  GITHUB_TOKEN=abcdefgh1234567890 node copy-github-labels.js <source repo> <dest repo>');
  console.log('Source and dest repos are of format OrgName/repo_name')
}

copyGitHubLabels.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN
});

console.log('Copying labels from', sourceRepo, 'to', destRepo)

// Copy labels from one repository to another. Some errors are normal since
// the repos will contain some of the same labels due to the default Github
// labels.
copyGitHubLabels.copy(sourceRepo, destRepo, function(err, label) {
  if (err) {
    //console.log('Could not copy label ', label, ':', err);
  } else {
    console.log('Label copied successfully: ', label)
  }
});

console.log('All possible labels copied!');
