function calculateFD() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var years = parseFloat(document.getElementById('years').value);

    var interest = (principal * rate * years) / 100;
    var totalAmount = principal + interest;

    var resultMessage = `After ${years} years, at an interest rate of ${rate}%, your total amount will be ${totalAmount.toFixed(2)}`;
    document.getElementById('result').innerText = resultMessage;

   

}
