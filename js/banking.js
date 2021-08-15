document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;

    const previousDeposit = document.getElementById('deposit-money');
    previousDeposit.innerText = depositAmount;
    const newDepositTotal = newDepositAmount + depositAmount;
    //clear the deposit input field
    newDepositAmount.innerText = newDepositTotal;
    depositInput.value = '';


})