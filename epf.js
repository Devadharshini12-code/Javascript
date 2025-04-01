function calculateEPF() {
   var salary = parseFloat(document.getElementById('salary').value);
     var cAge = parseFloat(document.getElementById('cAge').value);
     var retiredAge= parseFloat(document.getElementById('retiredAge').value);
     const years=retiredAge-cAge;
     var contribution= parseFloat(document.getElementById('contributiontoEPF').value);
     var increase= parseFloat(document.getElementById('Annualincrease').value);
     var interest= parseFloat(document.getElementById('interestrate').value);

     var monthlycontribution=salary*contribution;
  var monthlyinterest=interest/12;

   var balance=0;
   const totalmonths=years*12;
   for(let month=0;month<totalmonths; month++){

     balance=balance+monthlycontribution;
     balance=balance*monthlyinterest;
   }

   
     document.getElementById('result').innerText ='your EPF amount for ${years} years is ${balance.tofixed(2)}';

   

 }

