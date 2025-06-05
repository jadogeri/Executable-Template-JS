/**
 * @author      Joseph Adogeri
 * @since       04-JUN-2025
 * @version     1.0.0
 * @description loads text file into program
 *  
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the director
console.log(__dirname)

export const fileLoader = () =>{
    const filePath = path.join(__dirname, '\\..\\input.txt');
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