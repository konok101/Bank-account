// handle deposite button event 

document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposite box
    const depositeInput = document.getElementById('deposit-input');
    const depositAmount = depositeInput.value;

    // total deposite box
    const depositTotal = document.getElementById('deposit-total')


    const currentDepositAmoun = depositTotal.innerText;
    const newDepositTotal = parseFloat(currentDepositAmoun) + parseFloat(depositAmount);

    depositTotal.innerText = newDepositTotal;



    // total depsit balance add to 
    const previousTotal = document.getElementById('balance-total');

    const previousTotalText = previousTotal.innerText;

    const previousTortalAmount = parseFloat(previousTotalText)



    previousTotal.innerText = previousTortalAmount + parseFloat(depositAmount)




    // clean deposite input field
    depositeInput.value = '';


})

// handle withdrew 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrewField = document.getElementById('withdraw-input');
    const withdrewFieldText = withdrewField.value;
    const withdrewAmount = parseFloat(withdrewFieldText);

    // set withdrew total
    const withdrewBox = document.getElementById('withdraw-total');

    const withdrewText = withdrewBox.innerText;
    const TotalWithdrew = parseInt(withdrewText);

    const newWithdrewTotal = TotalWithdrew + withdrewAmount;

    withdrewBox.innerText = newWithdrewTotal;



    // withdrew balance Total
    const totalAmount = document.getElementById('balance-total')

    const totalAmountText = totalAmount.innerText;
    const totalAmountBalance = parseFloat(totalAmountText);

    const AfterWithrew = totalAmountBalance - withdrewAmount;

    totalAmount.innerText = AfterWithrew;

    withdrewField.value = "";
})