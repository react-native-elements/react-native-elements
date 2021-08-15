---
title: Auto-generation of Documentation Website

author: Khushal Agarwal

authorURL: https://github.com/khushal87
---

> This is a guide to generate documentation of the UI components automatically.

Initially when this workflow was not present, the entire documentation of the website was done by editing the docs manually by going to the `docs` directory under `website` and editing the markdown manually. Now, we have come with a flow where developers and contributors can focus more on logic than on writing markdown.

## Workflow

To do this we have created scripts which would parse the components and generate documentation out of it.

This is a 2 step process:

1. We take use of `react-docgen-typescript` which takes the input of the files for which we want to generate the documentation automatically. This gives in JSON as output. This JSON consists of all the details of the props including `type`, `name`, `description` and `defaultValue` and well as `description` of the components.

2. As we use Docusaurus for our documentation website, the pages of the documentation should be in the format of Markdown. Therefore, there should be process where we can change the JSON data, which we get from `react-docgen-typescript` to a suitable Markdown format. For this we use, `json2md` which takes in the data and convert it to suitable markdown string. This is stored in the directory and is shown on the website.

#### How does this work

Well to make the script to work automatically what we have done is as follows:

1. When you push your changes to your branch. A script `updateDocumentation.js` runs.

2. This invokes the `yarn docs:build` command which calls the scripts of auto-generation of docs and this also _lints_ the markdown files generated at the same time.

3. Now, if there is any changes in the markdown files. A commit with message `Update Documentation` is done and pushed after your commit is done to the branch.

**Note:** By passing pre-push hook will result in failure of documentation update and may lead maintainers to close your PR.

## Updating existing components

This is simple. Adding, removing, updating the props is also simple now. You just need to update the comments/description of the component and deal with the logic of your React Components(if required). Our workflow will automatically detect the markdown changes if any and push the changes using `pre-push` hooks while you push your code to your branch.

## Adding new components

Trust me this is easy. We have designed the workflow such that, you only need to work on your JavaScript/TypeScript logic, without bothering about updating the markdown files. The input to the docgenParser is automatic and doesn't require any aditional cofiguration.

**Make sure to add appropriate comments and description related to the components and the props of the component. Try keeping your code simple with simpler types for Autogen to work.**

**Please note:** The file name of the component as well as the folder must be in Capital letter. We use `regex` to parse the file paths, so this is important.

**Note**: If there are complex types/defaultValue, please head to `website/scripts/docgen/docgenParser.ts` to deal with those cases. Although we recommend you to avoid it as far as possible. Try improving the React logic and that will work.

## How to add a new demo for the component?

The demos can now be added by moving in to the `usage` directory under `website/docs/main` directory. We now have added Snack Player so that you get the glimpse of the component and also get to know how it works. Under the `usage`, there is a separate folder for each UI Component, where you can add Usage related to component and relevant descriptions.

**Note**: To add Snack demo, add it inside the snack directory. You can add as many Snack which will make our repository more helpful for developers.

## Testing the changes

For testing the changes in the documentation autogeneration, we simply need to run the following commands in sequence.

```bash
cd website
yarn test
```

We have also included the changes in the main test process, so this will automatically run with the workflow as well as when you run the `yarn test` command from root of the project.

## Future

Some of the components are class-based. They are: Input, SearchBar, Rating.(from https://github.com/Monte9/react-native-ratings). If you change the components to Functional/hooks based please remove it from the array of `filesToExclude` under `website/scripts/docgen/getComponentFiles.ts`. These are the paths of the component files for which the process is still manual.

So, generating the documentation doesn't come up well for these components. Due to the existing structure `react-docgen-typescript` fails to generate relevant result for them. We are therefore looking for contributions on these components to make them Fuctional/Hooks based.

Thanks. Hope you like the new workflow. Looking forward for improvements and contributions to it.
