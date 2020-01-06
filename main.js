const { process01, process02} = require("./processes"); 

async function main(){
    try{
        console.time("Total running time"); 
        const value01 = await process01(); 
        const value02 = await process02(); 
        
        console.log("Process 01 returned: ", value01);
        console.log("Process 01 returned: ", value02);
    
        console.log();

        console.timeEnd("total running time"); 
    
    
    } catch(error){
        console.error("error", error); 
    }
}

main();