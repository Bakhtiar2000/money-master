function getInputFieldValue(inputId){
    const inputField= document.getElementById(inputId);
    const inputValue= parseFloat(inputField.value);
    return inputValue;
}


function getTextFieldValue(elementId){
    const elementField= document.getElementById(elementId);
    const elementValue= parseFloat(elementField.innerText);
    return elementValue;
}

function setTextFieldValue(elementId, newValue){
    const elementField= document.getElementById(elementId);
    elementField.innerText= newValue;
}

function clear(element1,element2,element3,element4){
    const elementField1= document.getElementById(element1);
    const elementField2= document.getElementById(element2);
    const elementField3= document.getElementById(element3);
    const elementField4= document.getElementById(element4);

    elementField1.value='';
    elementField2.value='';
    elementField3.value='';
    elementField4.value='';
}