const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  fs.writeFile('myfile.txt', 'Newton School', function (err) {
  if (err) throw err;
  console.log('Saved!');
  // write code here
  // dont change function name
};

module.exports = { writeFile };
