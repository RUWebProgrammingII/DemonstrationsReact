# Webpack

1. Let's setup a new NPM project
2. Setup webpack and babel: webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-object-rest-spread
3. Setup a webpack.config.js file which takes in an entry point and creates a bundle from them all
4. Create a folder called src/
5. Within that folder let's create index.js which will be our entry point
6. Create another folder called services/
7. Within that folder let's create mathService.js which exposes sum and divide. Both should be fat-arrow functions and divide should spread the incoming data
8. Let's import mathService in index.js and call both functions
9. Let's webpack with the development flag and see the results
10. Let's execute the file
