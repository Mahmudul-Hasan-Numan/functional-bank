
// Deposit Section 
document.getElementById('deposit-button').addEventListener('click', function () {
    //Deposit Input 
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputValue = parseFloat(depositInputText);
    // console.log(depositInputValue)

    //Deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const newDepositValue = parseFloat(depositTotalText);
    const totalDepositValue = depositInputValue + newDepositValue;
    depositTotal.innerText = totalDepositValue;

    //Update Deposit Balance
    const depositTotalBalance = document.getElementById("balance-total");
    const depositTotalBalanceText = depositTotalBalance.innerText;
    const newDepositTotal = parseFloat(depositTotalBalanceText);
    const amountAfterDeposit = newDepositTotal + depositInputValue;
    depositTotalBalance.innerText = amountAfterDeposit;

    // Clear the Input Field
    depositInput.value = '';
})

// Withdraw Section 
document.getElementById('withdraw-button').addEventListener('click', function () {
    //Withdraw Input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    // console.log(newWithdrawAmount);


    // Withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalValue = parseFloat(withdrawTotalText);
    const newWithdrawTotal = newWithdrawAmount + withdrawTotalValue;
    withdrawTotal.innerText = newWithdrawTotal;

    // Update Withdraw Balance 
    const withdrawBalance = document.getElementById("balance-total");
    const withdrawBalanceText = withdrawBalance.innerText;
    const newWithdrawBalance = parseFloat(withdrawBalanceText);
    const totalWithdrawBalance = newWithdrawBalance - newWithdrawAmount;
    withdrawBalance.innerText = totalWithdrawBalance;
    // Clear The input Field
    withdrawInput.value = '';
})