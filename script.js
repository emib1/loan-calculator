/**********bring error containers********* */
const loanError = document.querySelector('.error-loan');
const interestError = document.querySelector('.error-inter');
const monthsError = document.querySelector('.error-months');
const errorContainer = document.querySelector('.error-container')


//  clearthem

loanError.textContent ="";
interestError.textContent ="";
monthsError.textContent ="";
errorContainer.classList.add("hide");


/*********** vaildating input*********** */

const validateInput = function(loanInput, interestInput, monthsInput){
    isInput = false;

    if(loanInput === "" || loanInput <="0"){
        errorContainer.classList.remove("hide");
        loanError.textContent = "Loan Amount can not be empty"
        isInput =true;   
    }

    if(interestInput === ""){
        errorContainer.classList.remove("hide");
        interestError.textContent += " Interest Rate can not be empty"
        isInput =true;
    };

    if(monthsInput === ""){
        errorContainer.classList.remove("hide");
        monthsError.textContent += "Please add the months required to pay"
        isInput = true;

    };

    setTimeout(function(){
        errorContainer.classList.add("hide");
    }, 10000)
   
    return isInput;
}; // end fo vaidate input fuunction



/*******************calculate loan */

const calculateLoan = function (loanInput, interestInput, monthsInput){
   loanAmount = Number(loanInput);
   interestRate = Number(interestInput);
   monthsRequired = Number(monthsInput);

   interestAmount= (interestRate/100) 
   amountloan = (loanAmount * interestAmount) * monthsInput;

   return[amountloan];

};//end of calculation funstion


/*************event listeners **********/

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

/************html elements******* */
const loan = document.querySelector(".loan input");
const interest = document.querySelector(".interest input")
const months = document.querySelector(".months input")

var loanInput = loan.value;
var interestInput = interest.value;
var monthsInput = months.value;

const isInput = validateInput(loanInput, interestInput, monthsInput);

if (!isInput){
    const resultDOM =  document.querySelector(".result");
    const results = calculateLoan(loanInput, interestInput, monthsInput);
    resultDOM.textContent = `Monthly payment is: ${results}`;

    setTimeout(function(){
        loanInput.value = '';
        interestInput.value = '';
        monthsInput.value = 0;
      }, 10000)
} //input if ended

}); // form statement end