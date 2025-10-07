//order.html
    function toggleCustomization(drinkId) {
        const section = document.getElementById(drinkId + "-customization");
        section.classList.toggle("hidden");
}

    document.querySelectorAll('.customization .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

             // Find which drink section this button belongs to
            const drinkSection = button.closest('.customization');
            const drinkType = drinkSection.id.replace('-customization', '');

            // Collect options
            const formData = new FormData(document.querySelector('form'));
            const order = {};
            formData.forEach((value, key) => {
                if (key.startsWith(drinkType)) {
                    order[key] = value;
                }
             });

            // Save to localStorage
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push({ drinkType, ...order });
            localStorage.setItem('orders', JSON.stringify(orders));

            // Redirect to checkout
            window.location.href = 'checkout.html';
        });
    });

//MENU DOT HTML

function openDrink(openDrink) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tablinks.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//CHECK OUT DOT HTML

    window.addEventListener('DOMContentLoaded', () => {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const container = document.querySelector('.col-25');

    if (orders.length === 0) {
        container.innerHTML = '<p>No items in your cart yet.</p>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-item">
            <h4>${order.drinkType}</h4>
            <ul>
                ${Object.entries(order)
                    .filter(([key]) => key !== 'drinkType')
                    .map(([key, val]) => `<li>${key.replace(/_/g, ' ')}: ${val}</li>`)
                    .join('')}
            </ul>
         </div>
    `).join('');
});


// sign up html

    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
    document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
    }

    function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
     // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    }

    function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
    }

    function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
    }

        //password validation

        var myInput = document.getElementById("pword");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function() {
            document.getElementById("message").style.display = "block";
        };

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
        };

        // When the user starts to type something inside the password field
        myInput.onkeyup = function() {
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if(myInput.value.match(lowerCaseLetters)) {  
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
  
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {  
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
  
        // Validate length
        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
        };

    //submit form to account.html
    document.getElementById('regForm').addEventListener('submit', function(e) {
        const password = document.getElementById('pword').value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}$/;

    if (!regex.test(password)) {
        e.preventDefault();
        alert('Password must have at least 8 characters, including uppercase, lowercase, number, and special character.');
        return;
    }

    // Save form info to localStorage
    const formData = {
        fname: this.fname.value,
        lname: this.lname.value,
        email: this.email.value,
        phone: this.phone.value,
        dd: this.dd.value,
        mm: this.mm.value,
        yyyy: this.yyyy.value,
        uname: this.uname.value
    };

    localStorage.setItem('userProfile', JSON.stringify(formData));
    });

//account.html

    // Load user info from localStorage
    const userProfile = JSON.parse(localStorage.getItem('userProfile')); 
    if (userProfile) { 
        document.getElementById('userName').textContent = userProfile.uname; 
        document.getElementById('fullName').textContent = userProfile.fname + ' ' + userProfile.lname; 
        document.getElementById('email').textContent = userProfile.email; 
        document.getElementById('phone').textContent = userProfile.phone; 
        document.getElementById('birthday').textContent = `${userProfile.dd}/${userProfile.mm}/${userProfile.yyyy}`; 
    } else { 
        // If someone opens account.html directly without signing up 
        document.querySelector('main').innerHTML = "<h2>Please sign up first.</h2><a href='sign_up.html'>Go to Sign Up</a>"; 
    }