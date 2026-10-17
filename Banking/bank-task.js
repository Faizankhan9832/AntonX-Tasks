
let ask = prompt("do you want to create account ")
if ( ask == "yes")
    prompt("lets star")
else {
    console.log("ok byeee");
    
}
let creatAccount = alert("enter details")
let name = prompt("enter your name ")
 console.log("your name is ",name );


let age = prompt("enter your age")
if ( age >= 18){
    console.log("you are eligible")
    console.log("your age " , age);
}
else {
    alert("ok byeee");
    console.log("you are not eligible");
}

let address =prompt("enter your address")
console.log("your address",address)

let IdCard =prompt("enter your Id card")
console.log("your id card is " , IdCard);

let amount = prompt("enter your  amount")
 if(amount >= 10000){
    console.log("amount can be deposited")
 }
 else{
    alert("amount is less")
    console.log("deposit amount is less",amount);
    
 }

let withdraw = prompt("enter your amount for withdrawl")
 if( withdraw >= amount){
 console.log("withdrawl amount is ",withdraw )
    
 }
 else{
    alert("you have less balance")
    console.log("invalid entry",withdraw)
 }

let checkout = prompt("you have checked out ")
  if( checkout == withdraw){
 console.log("checkout amount is ",withdraw )
    
 }
 else{
    alert("invalid entry")
    console.log("invalid entry",withdraw)
    console.log("you have checked out")
 }

