console.log("js file linked");

            var calculateBtn = document.getElementById('calculateBtn');

            var displayResults = document.getElementById('results');

            // convert feet and inches to meters

            function convertToMeters(feet, inches) {
                var meters = feet * .3  + inches * .025;
                return meters;
            }

            // convert pounds to kgs

            function convertToKgs(x) {
                var kgs = x / 2.2;
                return kgs;
            }

            function bmiCalc(a,b) {
                var bmi = a / (b * b);
                return Math.floor(bmi * 100) / 100;
            }

            // get values from text inputs and caclulate bmi

            calculateBtn.addEventListener('click', function() {

                // get height in feet

                var heightFeet = document.getElementById('heightFeet').value;
                console.log("You entered" + " " + heightFeet + " feet");

                // get height in inches

                var heightInches = document.getElementById('heightInches').value;
                console.log("You entered" + " " + heightInches + " inches");

                // combine them and convert to meters 

                var heightMeters = convertToMeters(heightFeet, heightInches);
                console.log("Your height converted to meters is: " + heightMeters);

                // get weight in pounds
                
                var weight = document.getElementById('weight').value;
                console.log("You entered " + weight + " pounds");

                //  convert to kgs

                var weightKgs = convertToKgs(weight);
                console.log("Your weight in Kgs is: " + weightKgs);

                var bmi = bmiCalc(weightKgs, heightMeters);
                displayResults.innerHTML = `
                <h2>Your BMI is: ${bmi}
                `
                console.log("Your BMI is " + bmi);

            })