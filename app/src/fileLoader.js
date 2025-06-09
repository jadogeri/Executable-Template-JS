/**
 * @author      Joseph Adogeri
 * @since       04-JUN-2025
 * @version     1.0.0
 * @description loads text file into program
 *  
 */
const fs = require('fs');

const fileLoader = () =>{

    console.log(__dirname)


    const filePath = "input.txt"
    let textdata =
    fs.readFileSync(filePath, 'utf8', (err, data) => {
       if (err) {
           console.error("Error reading file:", err);
           return err; 
       }else{
       //return data if no errors
           return data
       }
   });

   return textdata

}


module.exports = { fileLoader }