function getInputValue(InputItem) {
    const Input = document.getElementById(InputItem);
    const InputText = Input.value;
    const InputValue = parseFloat(InputText);

    // Clear the Input Field
    Input.value = '';
    return InputValue;
}

function totalValue(Balance, depositInputValue) {
    const depositTotal = document.getElementById(Balance);
    const depositTotalText = depositTotal.innerText;
    const newDepositValue = parseFloat(depositTotalText);
    depositTotal.innerText = depositInputValue + newDepositValue;
}

function updateTotalBalance(depositInputValue, isadd) {
    const depositTotalBalance = document.getElementById("balance-total");
    const depositTotalBalanceText = depositTotalBalance.innerText;
    const newDepositTotal = parseFloat(depositTotalBalanceText);
    if (isadd == true) {

        depositTotalBalance.innerText = newDepositTotal + depositInputValue;
    }
    else {
        depositTotalBalance.innerText = newDepositTotal - depositInputValue;
    }
}




// Deposit Section 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputValue = getInputValue('deposit-input');
    if (depositInputValue > 0) {
        totalValue('deposit-total', depositInputValue);
        updateTotalBalance(depositInputValue, true);
    }

})

// Withdraw Section 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    if (newWithdrawAmount > 0) {
        totalValue('withdraw-total', newWithdrawAmount);
        updateTotalBalance(newWithdrawAmount, false);
    }

})