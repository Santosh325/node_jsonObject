const fs = require('fs')

const details = {
    name: 'john doe',
    age: 30,
    address: 'hong kong',
}


// converting object to json
const convertToJson = JSON.stringify(details);

// saving json file to jsonFile.json
fs.writeFile('jsonFile.json',convertToJson, (err) => {
  if(err) throw err;
  console.log('saved to jsonFile');
});

fs.readFile('jsonFile.json', 'utf-8',(err, data) => {

    // reading file from jsonFile and displaying it in json format
    const jsonData = data;
    console.log(jsonData);

   // converting jsonString to jsonObject

   const jsonObj = JSON.parse(jsonData);
   console.log(jsonObj)


})