function calTotal() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();

        let amount = document.getElementById('amount').value;
        amount = parseFloat(amount);

        let percent = document.getElementById('percent').value;
        percent = parseFloat(percent) / 100;
        let percentAmount = amount * percent;
        let total = (amount * percent) + amount;

        let people = document.getElementById('people').value;
        people = parseFloat(people);

        document.getElementById('bill').textContent = 'Bill: $' + amount.toFixed(2);
        document.getElementById('tip').textContent = 'Tip: $' + percentAmount.toFixed(2);

        if (people > 1) {
            let totalPerPerson = total / people;
            document.getElementById('split').textContent = 'Split: $' + people.toFixed(2);
            document.getElementById('split').textContent = 'Total: $' + totalPerPerson.toFixed(2) + ' per person';
        }

        document.getElementById('totalAmount').textContent = 'Total: $' + total.toFixed(2);

        document.getElementById('clear').addEventListener('click', function(event) {
            event.preventDefault();

            trimVal('amount');
            trimVal('percent');
            trimVal('people');
        });

    });

}

calTotal();

function trimVal(id) {
    document.getElementById(id).value = "";
}