---
title: Google Summer of Code'21 Khushal Agarwal

author: Khushal Agarwal

authorURL: https://github.com/khushal87
---

<div  align="center">
	<a  href="https://summerofcode.withgoogle.com/projects/#5690075263795200"><img  src="https://pbs.twimg.com/media/EwIc141UUAUnA7x.png"  width="650"  alt="google-summer-of-code"/></a>
	<br />
	<b>
		<p>
		Automatically generate documentation out of React/React Native Component
		</p>
	</b>
</div>

This summer, I was pleased to get selected for Google Summer of Code'21 under the organization [React Native Elements](https://github.com/react-native-elements). Working under the organization, my project was to **generate documentation automatically out of the UI components and present it in the Docusaurus website**.

<div  align="center">

![enter image description here](https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif)

</div>

The purpose of creating this repository is to maintain a report summary of my GSoC work and this may also serve as a guide for future GSoC aspirants and a reference to the developers and contributors to the project.

## 📙 Abstract

[React Native Elements](https://www.npmjs.com/package/react-native-elements) is a cross-platform UI toolkit built on/for React Native. With a weekly download by 90k+ users and backed by a huge community, it provides UI components that can be used in your native application for the platform of Android/iOS/Web.

The documentation of the project was maintained manually previously i.e., suppose I want to change/add/remove a prop or a new component to the project the markdown file had to be changed manually. The process is tiring and new contributors may often forget to do so. So, during the summers I took the change this process and make a workflow such that the generation is automatic. This should be **fast and maintainable**.

## 📝 Deliverables

The deliverables of the project are as follows:

- [x] Efficient Development Setup
- [x] Re-structure and Refactor code to have a common pattern.
- [x] Maintain the Usage/Examples of the component as they are needed to be updated manually.
- [x] Refactor and rename the directory structure such that Autogen is successful.
  - Convert the code-base to have all the functional components.
- [x] Commenting on all the components and props.
  - Adding descriptions.
  - Adding prop descriptions.
  - Ensuring a common pattern is followed.
- [x] Writing **scripts to extract data out**(in JS/TS) of it in the form of JSON.
- [x] Converting the JSON data to Markdown.
- [ ] Automating the process such that the workflow works automatically whenever there is a change in the prop/definition or component code.

All of the listed deliverables were completed within the GSoC period. 🎉

## 📦 Working product

The work can be found here - [Official Website of React native elements](https://reactnativeelements.com/docs/next/). Please refer to the component docs.

**I have also written a blog on how it works attached [here](https://deploy-preview-3145--react-native-elements.netlify.app/blog/2021/08/12/auto-generation-of-docs).**

## 🚀 Contributions

### Pull requests

| PR Link                                                                                                                                                              | Description                                              | Status                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------- |
| [#3071](https://github.com/react-native-elements/react-native-elements/pull/3071)                                                                                    | [Refactor] Documentation directory structure             | Merged ✅             |
| [#3081](https://github.com/react-native-elements/react-native-elements/pull/3081)                                                                                    | [Refactor] Directory structure of components             | Merged ✅             |
| [#3112](https://github.com/react-native-elements/react-native-elements/pull/3112)                                                                                    | [Add] props description, descriptions to the component.  | Merged ✅             |
| [#3126](https://github.com/react-native-elements/react-native-elements/pull/3126)                                                                                    | [Docs] Added demos and snack for the documentation       | Merged ✅             |
| [#3136](https://github.com/react-native-elements/react-native-elements/pull/3136)                                                                                    | [Add] Docgen auto generation of docs scripts             | Merged ✅             |
| [#3142](https://github.com/react-native-elements/react-native-elements/pull/3142)                                                                                    | [Docs] Added generate-markdown scripts                   | Merged ✅             |
| [#3143](https://github.com/react-native-elements/react-native-elements/pull/3143), [#3144](https://github.com/react-native-elements/react-native-elements/pull/3144) | [Fix] Issues related to auto-generation of documentation | Merged ✅             |
| [#3145](https://github.com/react-native-elements/react-native-elements/pull/3145)                                                                                    | [Fix, Improve] Doc-gen issues and automation             | Open(to be merged) 🕒 |

### Issues

| Issue link                                                                          | Description                                                        |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [#3171](https://github.com/react-native-elements/react-native-elements/issues/3171) | [Docs] Auto-generation of documentation for class based components |

Apart from these contributions, I have contributed to other React native elements projects. They can be summarized as:

- [Pull requests](https://github.com/pulls?q=is:pr+org:react-native-elements+author:khushal87)
- [Issues](https://github.com/issues?q=is:issue+org:react-native-elements+author:khushal87)

| Project                           | Reference                                                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| React Native Elements - main repo | [Pull requests](https://github.com/react-native-elements/react-native-elements/pulls?q=is%3Apr+author%3Akhushal87+)                |
| React Native Elements App         | [Pull requests](https://github.com/react-native-elements/react-native-elements-app/pulls?q=is%3Apr+author%3Akhushal87+is%3Aclosed) |
| Playground                        | [Pull requests](https://github.com/react-native-elements/playground/pulls?q=is%3Apr+author%3Akhushal87+is%3Aclosed)                |

## 👨 Mentors

I would like to thank my mentors for helping me reach this milestone. 😄😄

I have not only learned about the Open Source culture and how to write good code but also, learned how the industry works and the import

- **Dhruvdutt Jadhav** - [GitHub](https://github.com/dhruvdutt). [LinkedIn](https://www.linkedin.com/in/dhruvdutt-jadhav/)
- **Pranshu Chittora** - [GitHub](https://github.com/pranshuchittora). [LinkedIn](https://www.linkedin.com/in/pranshuchittora/)
- **Jeremy Hamilton** - [GitHub](https://github.com/flyingcircle). [LinkedIn](https://www.linkedin.com/in/jeremy-hamilton-19b6217b/)

I would also like to thank [Arpit Bhalla](https://github.com/arpitBhalla) for being an amazing partner in this amazing journey.

## 🔗 Links

<div  align="center">

| **Student**      |                                                    Khushal Agarwal                                                     |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------: |
| **Organization** |                           [React Native Elements](https://github.com/react-native-elements/)                           |
| **Project**      | [Automatically generate documentation from components](https://summerofcode.withgoogle.com/projects/#5690075263795200) |
| **GitHub**       |                                       [khushal87](https://github.com/khushal87)                                        |
| **LinkedIn**     |                                [Khushal Agarwal](https://www.linkedin.com/in/khushal87)                                |
| **Twitter**      |                                     [khushal87](https://www.twitter.com/khushal87)                                     |
| **Email**        |                    <a  href="mailto:khushal.agarwal987@gmail.com">khushal.agarwal987@gmail.com</a>                     |

</div>
