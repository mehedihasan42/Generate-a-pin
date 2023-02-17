function getPin(){
    const pin = generateCode();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin;
    }
}

function generateCode(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const displayPinField = document.getElementById('input-field');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
           const digits = previousTypeNumber.split('');
           digits.pop();
           const remainingDigits = digits.join('');
           typeNumberField.value = remainingDigits;
        }
    }
    else{   
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('input-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success')
    const pinIncorrectMessage = document.getElementById('pin-incorrect')
    if(currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block';
        pinIncorrectMessage.style.display = 'none';
    }
    else{
       pinIncorrectMessage.style.display = 'block';
       pinSuccessMessage.style.display = 'none';
    }
})