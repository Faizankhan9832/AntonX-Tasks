let menu = `

      1  large pizza 1000 
      2  mdium pizza 500 
      3  small pizza 120  
        `

console.log(menu);

let order = prompt("select the order number :(1,2,3)")
let cheese = prompt("do u want extra cheese :yes or no")
let totalBill =0

if(order==1 ){
    console.log(" you pizza price is : Rs: 1000 ");
    totalBill+=1000;
}

else if(order==2){
    console.log(" you pizza price is : Rs: 500 ");
    totalBill+=500;
}

else if(order==3){
    console.log(" you pizza price is : Rs: 120 ");
    totalBill+=120;
}
else{
    console.log("invalid input");
    
}
if(order==1 && cheese=="yes"){
    console.log("extracheese price for large pizza is 200")
    totalBill+=200
}
if(order==2 && cheese=="yes"){
    console.log("extracheese price for medium pizza is 200")
    totalBill+=100
}
if(order==3 && cheese=="yes"){
    console.log("extracheese price for small pizza is 200")
    totalBill+=50
}

console.log("your total bill is",totalBill)


