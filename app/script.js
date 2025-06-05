
/**
 * @author      Joseph Adogeri
 * @since       04-JUN-2025
 * @version     1.0.0
 * @description converts text to json file
 *  
 */
const fs = require('fs');

const main = () =>{
    fs.readFile('./input.txt', 'utf8', (err, data) => {
       if (err) {
           console.error("Error reading file:", err);
           return;
       }
       // Proceed to convert to JSON
       convertTextToJson(data);
   });

}

const convertTextToJson = (textData) =>{
    try {
        const lines = textData.trim().split('\n');
        const jsonData = lines.map(line => {
            const [key, value] = line.split(':').map(item => item.trim());
            return { [key]: value }
        });
        // At this point jsonData will be an array of objects.
        // If you want to return a single object, you can create it here.
        const result = Object.assign({}, ...jsonData);
        console.log(JSON.stringify(result, null, 2));

        const jsonString = JSON.stringify(result, null, 2);

        fs.writeFileSync('./output.json', jsonString);

        console.log('JSON file created successfully!');

    } catch (error) {
        console.error("Error converting to JSON:", error);
    }

}

//starting program
main();