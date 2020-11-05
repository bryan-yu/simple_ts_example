# simple_ts_example

### Description

Barebones typescript example. This project contains baseline setup with:

- NodeJS test runner (Mocha) + assertion (Chai) frameworks for running tests as part of the cicd pipeline. See https://mochajs.org/ and https://www.chaijs.com/ for more info
- Webpack configuration defining code + 3rd party dependency bundling and optimization process as part of cicd. In this example it uses Babel for typescript transpilation
- Eslint for static code linting which can be run as part of the cicd pipeline to find issues such as inconsistencies (format, unused variables etc) or errors in code
- Tsconfig.json indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

Useful Links:
- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Babel: https://babeljs.io/
- Webapck: https://webpack.js.org/ 
- Eslint: https://eslint.org/
