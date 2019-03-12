---
id: version-0.19.1-contributing
title: Contributing
original_id: contributing
---

Thanks for taking the time to checkout this project and being willing to
contribute!

Here are some of some of ways you can help:

- [Reporting Bugs](#reporting-bugs)
- [Suggesting a Feature](#suggesting-a-feature)
- [Responding to Issues](#responding-to-issues)
- [Improving the Documentation](#improving-the-documentation)
- [Implementing Bug Fixes and Improvements](#implementing-bug-fixes-and-improvements)

## Reporting Bugs

React Native Elements is used by many people, in fact they're over 9000 persons
using it in their projects. With that many use cases, bugs are sure to come up
from time to time. We release almost every two weeks, so sometimes we may
accidentally miss something along the way. When you think you've found a bug
here's what to do:

1. Check your version. Most of the time, a fix has been made and released in new
   a new version. However, you may still be on an old version. The easiest way
   to validate this, it to update your version of react-native-elements to the
   latest.

2. Search the existing
   [issues](https://github.com/react-native-training/react-native-elements/issues)
   and
   [pull requests](https://github.com/react-native-training/react-native-elements/pulls)
   for one like what you're seeing. If you see one, add a 👍 reaction (please no
   +1 comments). Read through the comments and see if you can provide anymore
   valuable information to the thread. The more use cases we have, the easier it
   is to solve the issue.

3. If there are no other issues like yours then create a new one. New issues
   come with a issue template, so make sure to fill out as much information as
   possible.

If this is your first open source contribution, please take a look at
[this](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
guide.

## Suggesting a feature

Have a cool idea for a component? Think you can implement an existing feature
better? Go ahead and open and issue, describe what you want to accomplish and
lastly, why you think React Native Elements would benefit from it.

A few things to consider/add:

- As clearly as possible, attach screenshots, concepts of how this feature
  should behave
- Do you have any thoughts on how to implement this feature? Have you done
  something similar already?
- Hold off on submitting feature pull requests until the feature has been
  discussed. Once the feature has been established and agreed upon, create the
  pull request.

## Responding to Issues

When someone posts an issue, a maintainer might not be able to respond right
away. Or a person may post and issue that has incomplete information. As a
contributor you can help by answering the issue yourself if you know the cause
of it, or help the maintainers by making sure that all the information necessary
to validate the issue is there.

## Improving the Documentation

Our documentation is built with an open-source tool called
[Docusaurus](https://docusaurus.io). It has a ton of great features, the most
important being versioning - which allows us to have documentation for every
version we release.

The easiest way to contribute to a particular doc is through the Edit button on
the page. It'll take you directly to the exact file for that page on the repo.

Since all documents are versioned, it might be bit tricky to find which file
needs changing. You can use the rule below to figure out which file you need to
edit.

- [Changes for an existing doc on a version not yet released](#changes-for-an-existing-doc-on-a-version-not-yet-released)
- [Adding documentation for a new component](#adding-documentation-for-a-new-component)
- [Rewording, adding missed info, or making a typo for a released version](#rewording-adding-missed-info-or-making-a-typo-for-a-released-version)
- [Editing an existing page that's not docs or components](#editing-an-existing-page-that-s-not-docs-or-components)
- [Editing a document that appears the same in all versions](#editing-a-document-that-appears-the-same-in-all-versions)

### Changes for an existing doc on a version not yet released

These files are located in the `/docs` folder. So if I wanted to add a new prop
on the Avatar component, I'll need to document that in `/docs/avatar.md`.

### Adding documentation for a new component

You'll be creating your `.md` file in the `/docs` folder. Be sure to fill out
the header at the top of the file:

```
---
id: my-component
title: My Component
---
```

Lastly you'll need to add it to sidebar. This sidebar file is
`/website/sidebars.json`. Then add the `id` from the document we just created
into one of the sidebars.

### Rewording, adding missed info, or making a typo for a released version

These files are located in: <br />
`/website/versioned_docs/version-{version_name}/{file-name}`. <br /> The last
directory will differ depending on what version you are submitting docs for.

> Docusaurus only creates new versions of files if the `original` document in
> the `/docs` folder has changed since a release was made.

If I added docs for `Avatar.md` and it was our ever first release say `0.19.1`,
when releasing that version it'll create
`/website/versioned_docs/version-0.19.1/avatar.md`.

Now if I go to release `0.20.0` and didn't change `/docs/Avatar.md`, then
they'll be **no** `/website/versioned_docs/version-0.20.0/avatar.md`. Docusaurus
will simply point to the old version from `0.19.1`.

### Editing an existing page that's not docs or components

These files are located in: `/website/pages/en/`.

### Editing a document that appears the same in all versions

This one is particularly the most complicated and requires a bit of duplication.

Let's say we want edit the `Getting Started` doc. We want this document to be
the same for all versions. Firstly we'll need to make edits to
`/docs/getting_started.md` so it's available in future versions. Secondly we'll
need to duplicate those changes in
`/website/versioned_docs/version-{version-number}/getting_started.md`.

We'll only need to make this change to the **first set of versioned docs**. In
our case `/website/versioned_docs/version-0.19.1/getting_started.md`.

Be sure to check out the documentation over at
[docusaurus.io](https://docusaurus.io) if you have any other queries.

## Implementing Bug Fixes and Improvements

If you wish to submit a pull request for a new feature or issue then this is
guide for you. On GitHub, we extensively use labels to reflect the content and
status of issues.

For all issues that are bugs check
[here](https://github.com/react-native-training/react-native-elements/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3A%22%3Aboom%3A++Bug%22+-label%3A%22✅+Fixed+-+Next+Release%22+-label%3A%22📥+PR+Submitted%22).

Improvements are separated into two categories:

- [New components](https://github.com/react-native-training/react-native-elements/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3A%22💡New+Component%22+-label%3A%22✅+Fixed+-+Next+Release%22+-label%3A%22📥+PR+Submitted%22+).
- [Enhancements](https://github.com/react-native-training/react-native-elements/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3A%22✨Enhancement%22+-label%3A%22✅+Fixed+-+Next+Release%22+-label%3A%22📥+PR+Submitted%22).

Check out the [Labels guide](labels.md) for a more descriptive info on our usage
of labels.

---

To begin you should start by forking this repository first. This should get you
setup on your local machine:

### Setup

- Install [Node.js](https://nodejs.org/) if you have not already. (_We suggest
  you to use node v6.x.x_)
- Fork the **react-native-elements** repo
  [here](https://github.com/react-native-training/react-native-elements)
- `git clone <your-forked-repo-url> && cd react-native-elements`
- `yarn install` OR `npm install`
- `npm test`

One you have done this, create a new branch with a name that loosely describes
the issue on which you will be working. Once you think you have the addressed
the issue in question, submit a pull request to the `next` branch.

### Committing and Pushing Changes

We like to provide informative and useful commit messages when pushing changes
to the repo. This helps tremendously when sifting through the commit history to
find a particular changeset. A useful guide for creating meaningful commit
messages can be found
[here.](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification)
