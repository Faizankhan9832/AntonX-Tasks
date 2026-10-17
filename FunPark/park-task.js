let rides =`
            1 : car Rs 100
            2 : boat Rs 120
            3 : pheris wheel Rs 200
`
console.log(rides);


let tickets = prompt(" which ride do you want (1  2  3)")
let pictures = prompt("ask for picture eacg picture cost Rs50")
let totalBill = 0
if (tickets == 1){
    console.log("car ticket price is Rs100");
    totalBill += 100
}
else if (tickets == 2){
    console.log("boat ticket price is Rs120");
    totalBill += 120
}
else if (tickets == 3){
    console.log("pheris ticket price is Rs200");
    totalBill +=200
}
else {
    console.log("invalid input");
    
}

if(tickets == 1 && pictures == "yes"){
    console.log("for picture it cost rs 50")
    totalBill += 50
}

else if(tickets == 1 && pictures == "yes"){
    console.log("for picture it cost rs 50")
    totalBill += 50
}

else if(tickets == 1 && pictures == "yes"){
    console.log("for picture it cost rs 50")
    totalBill += 50
}
else {
    console.log("the total bill is ", totalBill );
    
}
