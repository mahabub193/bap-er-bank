function getInputValue(inputId) {
   const inputField = document.getElementById(inputId);
   const inputAmountText = inputField.value;
   const amountValue = parseFloat(inputAmountText);
   //clear the deposit input field
   inputField.value = ''
   return amountValue;

}
function updateTotalFeild(totalFeildId, depositAmount) {
   const totalElement = document.getElementById(totalFeildId);
   const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText);

   totalElement.innerText = previousTotal + depositAmount;
}

function updateBalance(depositAmount, issAdd) {
   const blanceTotal = document.getElementById('blance-total');
   const blanceTotalText = blanceTotal.innerText;
   const previousBalanceTotal = parseFloat(blanceTotalText);

   if (issAdd == true) {
      blanceTotal.innerText = previousBalanceTotal + depositAmount;
   }
   else {
      blanceTotal.innerText = previousBalanceTotal - depositAmount;
   }
}


//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
   //get the amount deposited
   /* const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText); */
   //    console.log(depositAmount);
   const depositAmount = getInputValue('deposit-input');
   //update deposit total
   /*    const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotal = parseFloat(depositTotalText);
   
      depositTotal.innerText = previousDepositTotal + depositAmount; */
   updateTotalFeild('deposit-total', depositAmount);

   //update account blance
   /* const blanceTotal = document.getElementById('blance-total');
   const blanceTotalText = blanceTotal.innerText;
   const previousBalanceTotal = parseFloat(blanceTotalText);

   blanceTotal.innerText = previousBalanceTotal + depositAmount; */
   updateBalance(depositAmount, true);


   // //clear the deposit input field
   // depositInput.value = ''
});

//handle withdrow event handler

document.getElementById('withdrow-button').addEventListener('click', function () {
   /* const withdrowInput = document.getElementById('withdrow-input');
   const withdrowAmountText = withdrowInput.value;
   const withdrowAmount = parseFloat(withdrowAmountText); */
   const withdrowAmount = getInputValue('withdrow-input');
   //set withdrow total

   /* const withdrowTotal = document.getElementById('withdraw-total');
   const previousWithdrowTotalText = withdrowTotal.innerText;

   const previousWithdrowTotal = parseFloat(previousWithdrowTotalText);
   withdrowTotal.innerText = previousWithdrowTotal + withdrowAmount; */

   updateTotalFeild('withdraw-total', withdrowAmount);



   //update balance
   /* const balanceTotal = document.getElementById('blance-total');
   const previousBalanceText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceText);
   balanceTotal.innerText = previousBalanceTotal - withdrowAmount; */

   updateBalance(withdrowAmount, false);
   //clear withdrow input
   /* withdrowInput.value = ''; */
});