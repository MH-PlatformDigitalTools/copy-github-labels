# copy-github-labels

This repo provides an easy way to copy Github labels from one repository to another.

## Dependencies

Node, with npm

## Setup

To set it up:

 - Run `npm install`
 - Ensure you have a Github access token (or [generate a new one](https://github.com/settings/tokens))
 - Copy `copy_github_labels.example` to a new file called `copy_github_labels`
 - Change the `GITHUB_TOKEN` in `copy_github_labels`

## Running

Run with `./copy_github_labels <sourceRepo> <destinationRepo>`

## Acknowledgments

Thanks to [jvandemo](https://github.com/jvandemo) (Jurgen Van de Moere) for writing [copy-github-labels](https://github.com/jvandemo/copy-github-labels). This repo is just a wrapper for that library.
