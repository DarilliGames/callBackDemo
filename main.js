function greeting(something){
    console.log("Hello " + something);

}

function farewell(something){
    console.log("Goodbye " + something);

}


function takeInput(callback){
    var name = prompt("What is your name?");
    callback(name);
}

takeInput(greeting);
takeInput(farewell);
