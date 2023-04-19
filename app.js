window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {   //will take whatever is submitted
    return {
      amount: +(document.getElementById("loan-amount").value),   // + taking the string and turning into into a number
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),          
    }
    
  }
 
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const vals = {
        amount: 10000,
        years: 10,
        rate: 5
    }

    const amountInput = document.getElementById("loan-amount");
    amountInput.value = vals.amount;
    
    const yearsInput = document.getElementById("loan-years");
    yearsInput.value = vals.years;

    const rateInput = document.getElementById("loan-rate");
    rateInput.value = vals.rate;
    console.log(rateInput.values)

    update();
    
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const userInput = getCurrentUIValues();
    
    updateMonthly(calculateMonthlyPayment(userInput))
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(vals) {
   const monthlyRate = (vals.rate/100) / 12;
   const n = Math.floor(vals.years *12);

   const payment = (monthlyRate * vals.amount)/
   (1 - Math.pow((1 + monthlyRate), -n)).toFixed(2);

   console.log(payment)
   return payment;
  

  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
    function updateMonthly(monthly) {
    const payment = document.getElementById("monthly-payment");

    payment.innerText = parseFloat(monthly).toFixed(2);
  }
  
