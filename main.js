let password = document.getElementById("password-test");//grabs the password input element
let power = document.getElementById("power-point-test");//grabs the power point element
password.oninput = function () {// triggers the function in real time when the user types in the password field
    let point = 0;
    let value = password.value;// gets the value of the password input
    let widthpower = ["1%", "25%", "50%", "75%", "100%"];
    let colorpower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthpower[point];
    power.style.backgroundColor = colorpower[point];
};

function openFeature(evt, featureName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("group");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Update variable declarations at the top
let passwordTest = document.getElementById("password-test");
let powerTest = document.getElementById("power-point-test");
let passwordCreate = document.getElementById("password-create");
let powerCreate = document.getElementById("power-point-create");

// Update the oninput handlers for both inputs
passwordTest.oninput = function() {
    updatePasswordStrength(this.value, powerTest);
};

passwordCreate.oninput = function() {
    updatePasswordStrength(this.value, powerCreate);
};

// Create a reusable function for checking password strength
function updatePasswordStrength(value, powerElement) {
    let point = 0;
    let widthpower = ["1%", "25%", "50%", "75%", "100%"];
    let colorpower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    powerElement.style.width = widthpower[point];
    powerElement.style.backgroundColor = colorpower[point];
}

// Update generatePassword to use the correct ID
function generatePassword(){
    let length = 12;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset[randomIndex];
    }
    document.getElementById("password-create").value = generatedPassword;
    // Trigger the password strength check
    passwordCreate.oninput();
}