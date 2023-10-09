


document.getElementById('withdrow-btn').addEventListener('click', function () {

    const windowField = document.getElementById('withdrow-field');
    const newWithdrowString = windowField.value;
    const newWithdrow = parseFloat(newWithdrowString);

    const windowElement = document.getElementById('withdrow-amount')
    const previousWithdrowString = windowElement.innerText;
    const previousWithdrow = parseFloat(previousWithdrowString);
    const totalWithdrow = newWithdrow + previousWithdrow;
    windowElement.innerText = totalWithdrow;
    windowField.value =('')

   const blanceElement = document.getElementById('total-amount')
   const previousBlanceString = blanceElement.innerText;
   const previousBlance = parseFloat(previousBlanceString);
   const totallBlance = previousBlance - newWithdrow;
   blanceElement.innerText =totallBlance; 

})