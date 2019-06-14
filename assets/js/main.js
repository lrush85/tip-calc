function calTotal() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();

        let amount = document.getElementById('amount').value;
        amount = parseFloat(amount);

        let percent = document.getElementById('percent').value;
        percent = parseFloat(percent) / 100;

        let total = (amount * percent) + amount;

        let people = document.getElementById('people').value;
        people = parseFloat(people);

        if (people > 0) {
            total = total / people;
            document.getElementById('totalAmount').textContent = total.toFixed(2);
        }

        if (isNaN) {
            document.getElementById('totalAmount').className = 'hidden';
        }

        document.getElementById('totalAmount').textContent = total.toFixed(2);

        trimVal('amount');
        trimVal('percent');
        trimVal('people');

    });

}

calTotal();

function trimVal(id) {
    document.getElementById(id).value = "";
}