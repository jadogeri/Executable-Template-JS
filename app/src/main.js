
/**
 * @author      Joseph Adogeri
 * @since       04-JUN-2025
 * @version     1.0.0
 * @description entry point of program
 *  
 */

const { fileLoader } =  require("./fileLoader")
const { convertTextToJson } =  require("./convertTextToJson");

const main = () =>{
    try{
        const textData = fileLoader();
        convertTextToJson(textData);

    }catch(error){
        console.error("error: ", error)

    }
}


module.exports = { main }