---
id: labels
title: Label Guide
---

<style>
.label {
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #ffffff;
  padding: 8px;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
}
.label.bug {
  background-color: #ee0701;
}
.label.bug-fix {
  background-color: #B4433B;
}
.label.help {
  background-color: #3F8729;
}
.label.question {
  background-color: #C65C8E;
}
.label.reply {
  background-color: #1F54C5;
}
.label.docs {
  color: #000;
  background-color: #5C97BE;
}
.label.enhancement {
  background-color: #1F54C5;
}
.label.first {
  background-color: #464EBA;
}
.label.v1 {
  background-color: #F3CB46;
  color: #000;
}
.label.fixed {
  background-color: #CEE3CE;
  color: #000;
}
.label.response {
  background-color: #C84B25;
}
.label.new {
  background-color: #3E872D;
}
.label.release {
  background-color: #6749E3;
}
.label.thoughts {
  background-color: #F3CB46;
  color: #000;
}
.label.types {
  background-color: #E1C2F5;
  color: #000;
}
.label.wip {
  background-color: #578ADA;
}
</style>

This page explains how we use labels throughout the repo to tag issues and pull requests. Knowing our label structure
will help you to be able to triage issues easier and know how to contribute to open issues and pull requests.

## Issues

<a class="label first" href="https://github.com/react-native-training/react-native-elements/labels/Good%20First%20Issue">Good First Issue</a>

A well documented issue explaining the tasks needed to accomplish it, that should be suitable for a new contributor to the project

<a class="label bug" href="https://github.com/react-native-training/react-native-elements/labels/bug">Bug</a>

The problem reported has been tested and the effect replicated by a maintainer

<a class="label help" href="https://github.com/react-native-training/react-native-elements/labels/Help%20Wanted">Help Wanted</a>

My code is broken and I don't know why. I need help!

<a class="label question" href="https://github.com/react-native-training/react-native-elements/labels/question">Question</a>

Seeking information that doesn't include code. e.g “can I use react navigation with react-native-elements?”

<a class="label reply" href="https://github.com/react-native-training/react-native-elements/labels/Awaiting%20Reply">Awaiting Reply</a>

Maintainer has replied to the user and there's been no response. After 2 weeks any issues with this label should be closed as inactive.

<a class="label fixed" href="https://github.com/react-native-training/react-native-elements/labels/Fixed%20-%20Next%20Release">Fixed Next Released</a>

Issue or feature has been implemented and will be apart of the next npm release

---

## Pull Requests

<a class="label bug-fix" href="https://github.com/react-native-training/react-native-elements/labels/Bug%20Fix">Bug Fix</a>

Fixes a bug reported in an issue

<a class="label response" href="https://github.com/react-native-training/react-native-elements/labels/Needs%20Response%20from%20Author">Needs Response From Author</a>

Maintainer has left feedback on the pull request and it needs a response or a revision made from the author

<a class="label release" href="https://github.com/react-native-training/react-native-elements/labels/RELEASE">RELEASE</a>

Pull request for the next version to be released

<a class="label wip" href="https://github.com/react-native-training/react-native-elements/labels/WIP">WIP</a>

Work In Progress. Author is still working on this PR and it shouldn't be merged or reviewed as yet

---

## Both

<a class="label thoughts" href="https://github.com/react-native-training/react-native-elements/labels/Thoughts%3F">Thoughts?</a>

Requires discussion for decisions that are unsure

<a class="label docs" href="https://github.com/react-native-training/react-native-elements/labels/docs">Docs</a>

Issues or pull requests surrounding documentation

<a class="label enhancement" href="https://github.com/react-native-training/react-native-elements/labels/Enhancement">Enhancement</a>

Suggests and implements improvements or additions to existing components

<a class="label new" href="https://github.com/react-native-training/react-native-elements/labels/New%20Component">New Component</a>

Suggests or implements a new component

<a class="label types" href="https://github.com/react-native-training/react-native-elements/labels/Types">Types</a>

Issues and pull requests around typescript definitions

<a class="label v1" href="https://github.com/react-native-training/react-native-elements/labels/v1">v1</a>

Temporary tag associated with the release of version 1.0.0
