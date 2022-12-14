# Survey Managment System
Survey Managment System is a React web application that was built using [Dhiwise](dhiwise.com), Figma design, Typeform , Telegram and GoogleSheet's APIs.

Survey Managment System enables a Surveyor to create a Typeform and share it instantly on the click of a button to Telegram. Also, can chat with the group from the System itself. Surveyor can generate a Typeform link and share that in the Telegram group from the system itself.The response recieved can be synced further with GoogleSheets.

### Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Version of Technologies](#version-of-technologies)
- [Folder Structure](#folder-structure)
- [Installed Dependency](#installed-dependency)
- [MIT License](#mit-license)
- [Community](#community)

# Features
<ul>
<li>Google Authentication</li>
<li>
Typeform Creation
<ul>
<li>Generate a link. </li>
<li>Generate and share the link. </li>
<li>Reset the question text. </li>
<li>Sync Response. </li>
</ul>
</li>

<li>Send message to Telegram Group
<ul>
<li>Send Typeform's link</li>
<li>Send required message</li>

</ul></li>

<li>Logout</li>
</ul>

# Screenshots:
![Form Link](https://github.com/DhiWise/Survey-Management-System/blob/master/src/assets/images/home.png)
![LogIn](https://github.com/DhiWise/Survey-Management-System/blob/master/src/assets/images/googleauth.png)
![Group Message](https://github.com/DhiWise/Survey-Management-System/blob/master/src/assets/images/msgGrp.png)
![Telegram](https://github.com/DhiWise/Survey-Management-System/blob/master/src/assets/images/telegram.png)

# Setup

#### 1. Clone the repository
```sh
$ git clone https://github.com/bhakti-tech02/surveyManagmentSystem.git
$ cd surveyManagmentSystem
```
## Install Dependencies

    npm install
## Running the App

    npm start

#### 2. [Generate Typeform token](https://developer.typeform.com/get-started/personal-access-token/)
#### 3. [Telegram Bot Setup](https://core.telegram.org/bots)
#### 4. [Generate token using OAuth2.0 for GoogleSheets](https://developers.google.com/workspace/guides/configure-oauth-consent)


<h3><u>How to run Survey Managment System?</u></h3>

- This application uses Google Authentication. Therefore,enter your Google Client Id from the developer's console in the .env file.
- Generate and set up your Typeform token in Services >> api.js
- Set up your Telegram Bot and enter your botId and chatId in Services >> api.js.
- Enter your SpreadSheet ID and token generated by OAuth2  in Services >> api.js.

## Running the storybook

We have detected common components and have generated possible variants of it. To check the documentation of generated common components by integrating storybook, Please follow below steps.

## Install and Initializes

     npx storybook init

## Run the Storybook

      npm run storybook
## Version of Technologies

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater

## Folder Structure

After creation, your project should look like this:

```
.
????????? package.json
????????? package-lock.json
????????? postcss.config.js
????????? public
???   ????????? favicon.ico
???   ????????? index.html
???   ????????? logo192.png
???   ????????? logo512.png
???   ????????? manifest.json
???   ????????? robots.txt
????????? README.md
????????? src
???   ????????? App.js
???   ????????? assets
???   ???   ????????? fonts ---------- Project fonts
???   ???   ????????? images --------- All Project Images
???   ????????? components --------- UI and Detected Common Components
???   ????????? constants ---------- Project constants, eg: string consts
???   ????????? hooks -------------- Helpful Hooks
???   ????????? index.js
???   ????????? pages -------------- All route pages
???   ????????? Routes.js ---------- Routing
???   ????????? styles
???   ???   ????????? index.css ------ Other Global Styles
???   ???   ????????? tailwind.css --- Default Tailwind modules
???   ????????? util
???       ????????? index.js ------- Helpful utils
????????? tailwind.config.js ----- Entire theme config, colors, fonts etc.
```


## Installed Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:


   1. @tailwindcss/forms - `0.4.0`,
   2. @testing-library/jest-dom - `^5.15.1`,
   3. @testing-library/react - `^11.2.7`,
   4. @testing-library/user-event" - `^12.8.3`,
   5. axios - `^0.27.2`,
   6. moment - `^2.29.4`,
   7. prop-types - `^15.8.1`,
   8. react - `17.0.2`,
   9. react-datepicker - `^4.5.0`,
   10. react-dom - `17.0.2`,
   11. react-modal - `^3.14.4`,
   12. react-router-dom - `6.0.2`,
   13. react-router-hash-link - `^2.4.3`,
   14. react-scripts - `5.0.0`,
   15. react-select - `^5.2.1`,
   16. react-toastify - `^9.0.1`,
   17. simple-react-hook-form - `^1.0.4`,
   18. web-vitals - `^2.1.0`

# MIT License

Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60"></a>
<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60"></a>
<a href="https://www.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60"></a>
<a href="https://www.youtube.com/c/DhiWise"><img src="https://www.gstatic.com/youtube/img/promos/growth/e627e007b3838086012608ef9370c211889f46b95b2335af722b53a2e49a0cd6_122x56.webp" width="60"></a>
