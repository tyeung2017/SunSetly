![Image](https://api.monosnap.com/rpc/file/download?id=qvQ4RXilpamDt6abtIe0N8SM0x8WwH)
[![Build Status](https://travis-ci.org/tyeung2017/sunsetly.svg?branch=master)](https://travis-ci.org/tyeung2017/sunsetly)
## Sunsetly
This application finds out the exact time of sunrise/sunset for a chosen city/date by a user. To check out the app, please clone this repository.

```
git clone
```
Install the dependencies
```
npm i
```
Run start
```
npm start
```

### User Story:
#### As a someone who wants to have a fresh start of her/his day:

+ be able to find out time for a sunrise for a selected city/date

#### As a someone who wants to spend *special* time watching a sunset:
+ be able to find out time for a sunset for a selected city/date.


### Specs:
+ **API** Use at least 1 API (done)

+ Make your API calls from the back-end using the Request module (or one you build yourself) (done)

+ Your server should contain a minimum of 2 routes (done)

+ **Test** We expect back-end testing using tape (test as many components as you can) and basic front-end testing.

+ Test your server by injecting fake HTTP requests using Shot.(done)

+ Host your project on heroku, see resources (done)

+ **Refactor** Use module.exports and require to break a single large server file into smaller modules. (done)

+ **File** Consider a good server file structure based on what we have discussed over the week. (done)

+ **CI** Employ continuous intergration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together) (done)

+ **Code Coverage** Use CodeCov or a similar tool for test coverage. (done)

+ Display continuous intergration and code coverage badges on your project README. (CI-done)

+ **Error handling** Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response. (done)

+ Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.(done)

### Architecture:
![Image](https://api.monosnap.com/rpc/file/download?id=poimBxlDAyMOC4JQnHcLB7evjmsKZE)

### Stretch Goal:

Convert UTC times   
Lovely CSS layouts


### Code Guidelines:

CamelCase for variable names
Comments for code clarification
Remove all unncessary 'console.log'
