let  form = document.getElementById("transactionForm");

let description = document.getElementById("description");

let amount = document.getElementById("amount");

let type = document.getElementById("type");

let transactionList = document.getElementById("transactionList");

let balance = document.getElementById("balance");

let income = document.getElementById("income");

let expenses = document.getElementById("expenses");

let transactions = [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    let descriptionValue = description.value
    let amountValue = Number(amount.value)
    let typeValue = type.value


let transaction = {
    description : descriptionValue,
    amount : amountValue,
    type : typeValue
}

transactions.push(transaction)
displayTransactions()
updateTotals()
form.reset()
});


function displayTransactions(){

    transactionList.innerHTML = "";

    transactions.forEach(function( transaction , index){
        let transactionDiv = document.createElement("div")
        transactionDiv.classList.add(
            "transaction",
            transaction.type
        );
// info section
        let infoDiv = document.createElement("div")
        infoDiv.classList.add("transaction-info")

        // create description
        let title = document.createElement("h3")
        title.textContent = transaction.description

        // create type 
        let typetext = document.createElement("p")
        typetext.textContent = transaction.type

        infoDiv.appendChild(title)
        infoDiv.appendChild(typetext)
        // create amount

        let amounttext = document.createElement("span")
        amounttext.classList.add("transaction-amount")

        if( transaction.type ==="income "){
            amounttext.textContent = "+$" + transaction.amount;
        }
        else{
            amounttext.textContent = "-$" + transaction.amount;
        }

        // create delete buton

        let deletebutton = document.createElement("button")
        deletebutton.textContent = "delete"
        deletebutton.classList.add("delete-btn")
        deletebutton.addEventListener("click",function(){
            transactions.splice(index,1 )
            displayTransactions()
            updateTotals()
        })
        transactionDiv.appendChild(infoDiv)
        transactionDiv.appendChild(amounttext)
        transactionDiv.appendChild(deletebutton)
        // put transactiondiv on page 
        transactionList.appendChild(transactionDiv)


    });
}

function updateTotals(){
    let totalincome = 0;
    let totalexpense = 0;

    transactions.forEach(function(transaction){
        if(transaction.type === "income"){
            totalincome += transaction.amount
        }
        else{
            totalexpense += transaction.amount
        }
    })
    let totalbalance = totalincome - totalexpense;
    income.textContent ="$" + totalincome.toFixed(2)
    expenses.textContent = "$" + totalexpense.toFixed(2);
    balance.textContent = "$" + totalbalance.toFixed(2);
}

