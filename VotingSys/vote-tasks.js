let age =prompt("enter age")

if (age>=18){
    
    console.log("you are eligible to  vote");
    let identity = prompt("enter nationality")
    if( identity.toLowerCase() === "pakistan"  ){
        console.log("you can vote")
    }
    else{
        console.log("fuck off")
    }


}
else{
    console.log("you are under age ");
}
