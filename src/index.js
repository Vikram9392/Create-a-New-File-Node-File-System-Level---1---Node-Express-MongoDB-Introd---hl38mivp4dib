const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  try { 
     await writeFile(fileName, fileContent); 
     console.log(`Wrote data to ${fileName}`); 
   } catch (error) { 
     console.error(`Got an error trying to write the file: ${error.message}`); 
   } 
  // write code here
  // dont change function name
};

module.exports = { writeFile };
