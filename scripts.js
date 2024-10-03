function calculateAge() {
            const dobMonth = parseInt(document.getElementById('dobMonth').value) - 1; // 0-based month
            const dobDay = parseInt(document.getElementById('dobDay').value);
            const dobYear = parseInt(document.getElementById('dobYear').value);

            const calcMonth = parseInt(document.getElementById('calcMonth').value) - 1; // 0-based month
            const calcDay = parseInt(document.getElementById('calcDay').value);
            const calcYear = parseInt(document.getElementById('calcYear').value);

            const dob = new Date(dobYear, dobMonth, dobDay);
            const calcDate = new Date(calcYear, calcMonth, calcDay);

            if (isNaN(dob) || isNaN(calcDate)) {
                document.getElementById('result').innerText = "Invalid date.";
                return;
            }

            let age = calcDate.getFullYear() - dob.getFullYear();
            const monthDiff = calcDate.getMonth() - dob.getMonth();

            // Adjust age if the birth date hasn't occurred yet
            if (monthDiff < 0 || (monthDiff === 0 && calcDate.getDate() < dob.getDate())) {
                age--;
            }

            document.getElementById('result').innerText = `You are ${age} years old.`;
        }

        function clearFields() {
            document.getElementById('dobMonth').value = '';
            document.getElementById('dobDay').value = '';
            document.getElementById('dobYear').value = '';
            document.getElementById('calcMonth').value = '';
            document.getElementById('calcDay').value = '';
            document.getElementById('calcYear').value = '';
            document.getElementById('result').innerText = 'Answer:';
        }