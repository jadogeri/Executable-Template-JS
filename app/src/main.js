
/**
 * @author      Joseph Adogeri
 * @since       04-JUN-2025
 * @version     1.0.0
 * @description entry point of program
 *  
 */

import { fileLoader } from "./fileLoader.js";
import { convertTextToJson } from "./convertTextToJson.js";

export const main = () =>{
    try{
        const textData = fileLoader();
        convertTextToJson(textData);

    }catch(error){
        console.error("error: ", error)

    }
}


main();