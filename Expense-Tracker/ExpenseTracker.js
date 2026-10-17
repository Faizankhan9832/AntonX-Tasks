// ===============================
// 1. GET HTML ELEMENTS
// ===============================

let form = document.getElementById("transactionForm");

let description = document.getElementById("description");

let amount = document.getElementById("amount");

let type = document.getElementById("type");

let transactionList = document.getElementById("transactionList");

let balance = document.getElementById("balance");

let income = document.getElementById("income");

let expenses = document.getElementById("expenses");


// ===============================
// 2. STORE TRANSACTIONS
// ===============================

let transactions = [];


// ===============================
// 3. FORM SUBMISSION
// ===============================

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get values from the inputs
    let descriptionValue = description.value;

    let amountValue = Number(amount.value);

    let typeValue = type.value;


    // ===============================
    // 4. CREATE TRANSACTION OBJECT
    // ===============================

    let transaction = {
        description: descriptionValue,
        amount: amountValue,
        type: typeValue
    };


    // Add transaction to array
    transactions.push(transaction);


    // Display transactions
    displayTransactions();


    // Update totals
    updateTotals();


    // Clear form
    form.reset();

});


// ===============================
// 5. DISPLAY TRANSACTIONS
// ===============================

function displayTransactions() {

    // Empty the list first
    transactionList.innerHTML = "";


    // Go through every transaction
    transactions.forEach(function(transaction, index) {

        // Create transaction div
        let transactionDiv = document.createElement("div");

        transactionDiv.classList.add(
            "transaction",
            transaction.type
        );


        // Create information section
        let infoDiv = document.createElement("div");

        infoDiv.classList.add("transaction-info");


        // Create description
        let title = document.createElement("h3");

        title.textContent = transaction.description;


        // Create type
        let typeText = document.createElement("p");

        typeText.textContent = transaction.type;


        // Put title and type inside infoDiv
        infoDiv.appendChild(title);

        infoDiv.appendChild(typeText);


        // Create amount
        let amountText = document.createElement("span");

        amountText.classList.add("transaction-amount");


        if (transaction.type === "income") {

            amountText.textContent = "+$" + transaction.amount;

        } else {

            amountText.textContent = "-$" + transaction.amount;

        }


        // Create delete button
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-btn");


        // Delete transaction when clicked
        deleteButton.addEventListener("click", function() {

            transactions.splice(index, 1);

            displayTransactions();

            updateTotals();

        });


        // Put everything inside transactionDiv
        transactionDiv.appendChild(infoDiv);

        transactionDiv.appendChild(amountText);

        transactionDiv.appendChild(deleteButton);


        // Put transactionDiv on the page
        transactionList.appendChild(transactionDiv);

    });

}


// ===============================
// 6. UPDATE TOTALS
// ===============================

function updateTotals() {

    let totalIncome = 0;

    let totalExpenses = 0;


    // Go through transactions
    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {

            totalIncome += transaction.amount;

        } else {

            totalExpenses += transaction.amount;

        }

    });


    // Calculate balance
    let totalBalance = totalIncome - totalExpenses;


    // Display results
    income.textContent = "$" + totalIncome.toFixed(2);

    expenses.textContent = "$" + totalExpenses.toFixed(2);

    balance.textContent = "$" + totalBalance.toFixed(2);

}