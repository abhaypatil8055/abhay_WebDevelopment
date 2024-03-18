var validateForm = (event) => {
    event.preventDefault();
    var userName = document.querySelector("#uname");
    var userEmail = document.querySelector("#umail");

    if (userName.value.trim() === "") {
        alert("Please Enter your Name");
        userName.focus();
        return false;
    }
    if (!isValidEmail(userEmail.value.trim())) {
        alert("Please Enter Valid Email address");
        userEmail.focus();
        return false;
    }
    alert("Form Submitted Successfully!!");
}

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}

var alertMsg = () => {
    alert("Hey Mate Fill the Below Form First, Thank You !!");
}

