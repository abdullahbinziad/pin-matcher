//getPin in 4 digits
function getPin() {
  const theGeneratedPin = generatePin();
  const pin = theGeneratedPin + "";
  if (pin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

//make random number
function generatePin() {
  const randomPinGenerate = Math.floor(Math.random() * 10000);
  return randomPinGenerate;
}

// btn hander generated
document.getElementById("generate-btn").addEventListener("click", function () {
  const generatedFinalPin = getPin();
  gettingInput('generated-pin-here',generatedFinalPin)
});

//getting input value from field
function gettingInput(typedPinId,inputedPin){
    const gettingText = document.getElementById(typedPinId);
    gettingText.value = inputedPin ;
}

// The calculator type button here 
document.getElementById('calculator').addEventListener('click', function(event){
    event.stopPropagation();
    const newTyped = event.target.innerText; 
    const previousTyped = document.getElementById("typed-pin-display");
if(newTyped=="C" && isNaN(newTyped)){
    previousTyped.value='';
}
else if(newTyped=="<" && isNaN(newTyped)){
   const previousDigits = previousTyped.value;
   const splitedDigit= previousDigits.split('');
   splitedDigit.pop();
   const remainingDigits= splitedDigit.join('');
   previousTyped.value = remainingDigits;
}
else{
    if(isNaN(newTyped)===false){
        console.log(newTyped);
    const updatedTypedPin= previousTyped.value + newTyped;
    gettingInput('typed-pin-display',updatedTypedPin);
    }
}
})

const mathched= document.getElementById('mathched');
const dontMathched= document.getElementById('dontMathched');
mathched.style.display='none';
dontMathched.style.display='none';
//after submit action
document.getElementById('sumitBtn').addEventListener('click', function(){
    const gettingTheGeneratedPin = document.getElementById("generated-pin-here");
    const typedPinDisplay = document.getElementById('typed-pin-display');
    
    if(gettingTheGeneratedPin.value == typedPinDisplay.value){
        mathched.style.display='block';
        dontMathched.style.display='none';
    }
    else{
        dontMathched.style.display='block';
        mathched.style.display='none';
    }
})