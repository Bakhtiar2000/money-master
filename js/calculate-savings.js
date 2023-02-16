document.getElementById('savings-calculator').addEventListener('click', function(){
    const  income= getInputFieldValue('income');
    const  savings= getInputFieldValue('savings');
    const  previousSavingAmount= getTextFieldValue('saving-amount');
    const  previousRemainingBalance= getTextFieldValue('remaining-balance');
    const  balance= getTextFieldValue('balance');

    const newSavingAmount= (income/100)*savings;
    const newRemainingBalance= balance- newSavingAmount;


    if(isNaN(savings) || savings>100 || savings<0)
    {
        alert("Please enter only numbers from 1-100 as your savings percentage");
        clear('savings');
        return;
    }
    if(newRemainingBalance<0){
        savingsString= savings.toString();
        alert('You dont have enough money to save '+ savingsString + '% of your income');
        return;
    }
    setTextFieldValue('saving-amount', newSavingAmount);
    setTextFieldValue('remaining-balance', newRemainingBalance);
});










// const  savings= document.getElementById('savings');
// const  saving-amount= document.getElementById('saving-amount');
// const  remaining-balance= document.getElementById('remaining-balance');