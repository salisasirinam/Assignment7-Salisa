function editNodeText(regex, input, helpId, helpMessage)

{
    // See if the info matches the regex that was defined
    // If the wrong information was entered, warn them
    if (!regex.test(input)) {

        if (helpId != null)
            // We need to show a warning
            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        // Add new warning
        helpId.appendChild(document.createTextNode(helpMessage));

    } else {

        // If the right information was entered, clear the help message
        if (helpId != null) {

            // Remove any warnings that may exist
            while (helpId.childNodes[0]) {
                helpId.removeChild(helpId.childNodes[0]);
            }

        }

    }
};

function isUsernameOk(inputField, helpId) {
    return editNodeText(/^[A-Za-z0-9._-]{8,30}$/, inputField.value, helpId, "Should be greater than 8 characters");
};

function isPasswordOk(inputField, helpId) {
    return editNodeText(/^[A-Za-z0-9]{8,30}$/, inputField.value, helpId, "Should be greater than 8 characters");
};

function isCfPasswordOk(inputField, helpId) {
    if (document.getElementById('password').value == document.getElementById('cfpassword').value) {

       
    } else {
        document.getElementById('name_cfpassword').innerHTML = "Password and Password confirmation do not match";
        document.getElementById('name_cfpassword').style.color = "red";
    }

};

function isEmailOk(inputField, helpId) {
 
  return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "This Email is invalid");
 
}


document.getElementById('name_username').style.color = "red";
document.getElementById('name_password').style.color = "red";
document.getElementById('name_email').style.color = "red";
