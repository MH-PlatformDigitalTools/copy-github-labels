# copy-github-labels

This repo provides an easy way to copy Github labels from one repository to another.

To set it up:

 - Ensure you have a Github access token (or [generate a new one](https://github.com/settings/tokens))
 - Copy `copy_github_labels.example` to a new file called `copy_github_labels`
 - Change the `GITHUB_TOKEN` in `copy_github_labels`
 - Run with `./copy_github_labels <sourceRepo> <destinationRepo>`
