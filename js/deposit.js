



document.getElementById('deposit-btn').addEventListener('click',function(){
    
    const depositField = document.getElementById('deposit-field')
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString)

    const depositElement = document.getElementById('deposit-amount')
    const previousDepositString = depositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    const currentDeposit = newDeposit + previousDeposit;
    depositElement.innerText = currentDeposit;
    depositField.value =('')


    const balanceElement = document.getElementById('total-amount')
    const newBalanceString = balanceElement.innerText;
    const newBalance =parseFloat(newBalanceString);
    const totallBlance = newBalance + newDeposit;
    balanceElement.innerText = totallBlance;
})