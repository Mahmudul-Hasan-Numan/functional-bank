function getInputValue(InputID) {
    const inputField = document.getElementById(InputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //Clear input Field
    inputField.value = '';
    return amountValue
}


function updateTotalField(totalFieldID, depositAmount) {
    const depositTotal = document.getElementById(totalFieldID);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    return previousDepositTotal;
}

function updateBalace(depositAmount, isadd) {
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance()
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isadd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalace(depositAmount, true);
    }


    // const inputField = document.getElementById("deposit-input");
    // const inputAmountText = inputField.value;
    // const amountValue = parseFloat(inputAmountText)

    //Get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    // //Update Balance
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

})

//Withdraw Section
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalace(withdrawAmount, false);
    }


    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText)

    // // Withdraw Update section
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    // //Withdraw Balance Section
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // //Clear Input Field
    // withdrawInput.value = '';
})