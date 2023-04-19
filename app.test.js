
it("should get monthly payments", function() {
    let test = calculateMonthlyPayment({
        amount: 10000,
        years: 10,
        rate: 5
    });
    console.log(test);
    expect(test).toBeCloseTo(106.84);
})

it("should update the UI with monthly payments", function() {
    const form = document.querySelector("#calc-form");
    const amountInput = document.getElementById("loan-amount");
    amountInput.value = 40000;
    
    const yearsInput = document.getElementById("loan-years");
    yearsInput.value = 25;

    const rateInput = document.getElementById("loan-rate");
    rateInput.value = 8;

   document.getElementById("calc-submit").click()
   expect(document.getElementById("monthly-payment").innerText).toBe("310.08");

});
  