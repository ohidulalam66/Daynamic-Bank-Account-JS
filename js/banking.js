// Handle Deposit Button
document.getElementById('deposit-btn').addEventListener('click', function(){

    // get the new amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // get the Previous amount deposited
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // get total deposit
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //get update deposit account balance
    const balanceDepositTotal = document.getElementById('balance-total');
    const previousBalanceDepositText = balanceDepositTotal.innerText;
    const previousBalanceDepositAmount = parseFloat(previousBalanceDepositText);

    // get total account balance
    const newBalanceTotal = previousBalanceDepositAmount + newDepositAmount;
    balanceDepositTotal.innerText = newBalanceTotal;
    
    //clear the deposit input felid
    depositInput.value = '';
})

// Handle Withdrew Button
document.getElementById('withdrew-btn').addEventListener('click', function(){
    
    // get the amount withdrewed
    const withdrewInput = document.getElementById('withdrew-input');
    const newWithdrewText = withdrewInput.value;
    const newWithdrewAmount = parseFloat(newWithdrewText);

    // get the previous withdrewed
    const withdrewTotal = document.getElementById('withdrew-total');
    const previousWithdrewText = withdrewTotal.innerText;
    const previousWithdrewAmount = parseFloat(previousWithdrewText);

    // get total withdrew
    const newWithdrewTotal = previousWithdrewAmount + newWithdrewAmount;
    withdrewTotal.innerText = newWithdrewTotal;

    //get update withdrew account balance
    const balanceWithdrewTotal = document.getElementById('balance-total');
    const previousBalanceWithdrewText = balanceWithdrewTotal.innerText;
    const previousBalanceWithdrewAmount = parseFloat(previousBalanceWithdrewText);

    // get partial account balance
    const newBalancePartial = previousBalanceWithdrewAmount - newWithdrewAmount;
    balanceWithdrewTotal.innerText = newBalancePartial;

    // clear the withdrew input field
    withdrewInput.value = '';
})