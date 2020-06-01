const postcss = require('postcss');
// Uncomment line 3 and 14 to see error change library to see the error
// const postcssModules = require("postcss-modules-sync").default
const postcssModules = require("postcss-modules")

const output = postcss([
  postcssModules()
]).process(`.test {
  background: blue;
  composes: title from "./mixins.css";
}`, {
  from: `${__dirname}/fake_path.css`,
})

output.then((resultAsync) => {
  console.log('async result:\n', resultAsync.css);
})
