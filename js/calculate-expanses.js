document.getElementById('expanse-calculator').addEventListener('click', function(){
    
    const  income= getInputFieldValue('income');
    const  foodExpanses= getInputFieldValue('food-expanses');
    const  rentExpanses= getInputFieldValue('rent-expanses');
    const  clothesExpanses= getInputFieldValue('clothes-expanses');
    const  previousTotalExpanses= getTextFieldValue('total-expanses');
    const  previousBalance= getTextFieldValue('balance');

    const newTotalExpanses= foodExpanses +rentExpanses +clothesExpanses;
    const newBalance= income- newTotalExpanses;
    

    if(isNaN(income)|| isNaN(foodExpanses)|| isNaN(rentExpanses)|| isNaN(clothesExpanses) || income<0 || foodExpanses<0 || rentExpanses<0 || clothesExpanses<0)
    {
        alert("Please enter only positive numbers as input");
        clear('income','food-expanses','rent-expanses','clothes-expanses');
        return;
    }
    if(newTotalExpanses>income)
    {
        alert('Your expanse cannot be bigger than your income');
        clear('income','food-expanses','rent-expanses','clothes-expanses');
        return;
    }

    
    setTextFieldValue('total-expanses', newTotalExpanses);
    setTextFieldValue('balance', newBalance);
});













