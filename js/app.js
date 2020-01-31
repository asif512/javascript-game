document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').style.display = 'none';

    setTimeout(calculateResult, 2000);
    e.preventDefault();
    
});


function calculateResult(){
   
    // UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const toatalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    // Monthly Payment
    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principle*x*calculateInterest) / (x-1);

     if(isFinite(monthly)){
         monthlyPayment.value = monthly.toFixed(2);
         totalPayment.value = (monthly * calculatePayment).toFixed(2);
         toatalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);
         document.getElementById('loader').style.display = 'none';
         document.getElementById('result').style.display = 'block';
         
     }
     else{

         // Error Label function call
         erroMessage('Enter the number');       
     }
     amount.value = '';
     interest.value = '';
     years.value = '';
}

// Show Error Message
function erroMessage(error){

    
    document.getElementById('loader').style.display = 'none';

    const carcardBody = document.querySelector('.card-body');
    const heading = document.querySelector('.heading');

    const errorLabel = document.createElement('div');
    errorLabel.className = 'alert alert-info';
    errorLabel.appendChild(document.createTextNode(error));
    carcardBody.insertBefore(errorLabel, heading);

    // Set Time out method
    setTimeout(errorDisable, 3000);

}

// Error Disable
function errorDisable(){
    document.querySelector('.alert').remove();
}