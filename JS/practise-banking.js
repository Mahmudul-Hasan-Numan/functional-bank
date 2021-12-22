
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