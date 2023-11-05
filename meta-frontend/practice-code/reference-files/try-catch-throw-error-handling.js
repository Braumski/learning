
function addTwoNums(a,b) {
    try{
        if( typeof(a) !== 'number'){
            throw ReferenceError("The first argument is not a number")
        }else if(typeof(b) !== 'number'){
            throw ReferenceError("The second argument is not a number")
        }else {
            console.log(a + b);
    }
    }catch(err) {
        console.log("Error!", err)
        
    
    }                                                                                                                      
}                         
addTwoNums(5,5);
console.log("The code is still running");


//Error handling is usually associated with ajax calls and asynchronous code


                        
                                                                                                                                                                                                                                                                                                                                           