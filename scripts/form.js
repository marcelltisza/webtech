


function ValidateForm() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const sex = document.getElementById('sex').value;
    const password = document.getElementById('password').value;
    const cPassword = document.getElementById('cPassword').value;
    const accept = document.getElementById('accept');

    const form = document.getElementById('form');

    const errorFirstname = document.getElementById('errorFirstname');
    const errorLastname = document.getElementById('errorLastname');
    const errorAge = document.getElementById('errorAge');
    const errorEmail = document.getElementById('errorEmail');
    const errorSex = document.getElementById('errorSex');
    const errorPassword = document.getElementById('errorPassword');
    const errorCpassword = document.getElementById('errorCpassword');
    const errorAccept = document.getElementById('errorAccept');

    let flag = true;
    
    flag = flag & CheckFirstname(firstname);
    flag = flag & CheckLastname(lastname);
    flag = flag & CheckAge(age);
    flag = flag & CheckEmail(email);
    flag = flag & CheckPassword(password);
    flag = flag & CheckCpassword(password, cPassword);
    flag = flag & CheckAccept(accept);
    
    if (flag == true)
        alert("registered successfully");
    else
        event.preventDefault()
}


function CheckFirstname(firstname) {
    if (firstname === '' || firstname == null) {
        errorFirstname.innerText = "Cannot be empty";
        return false;
    }
    else {
        errorFirstname.innerText = "";
        return true;
    }   
}

function CheckLastname(lastname) {
    if (lastname === '' || lastname == null) {
        errorLastname.innerText = "Cannot be empty";
        return false;
    }   
    else {
        errorLastname.innerText = " ";
        return true;
    } 
}

function CheckAge(age) {
    if (age < 0) {
        errorAge.innerText = "Cannot be negative";
        return false;
    }   
    else {
        errorAge.innerText = "";
        return true;
    }     
}

//add regex
function CheckEmail(email) {
    if (email === '' || email == null) {
        errorEmail.innerText = "Cannot be empty";
        return false;
    }
    else {
        errorEmail.innerText = "";
        return true;
    }  
}

//add regex
function CheckPassword(password) {
    if (password === '' || password == null || password.length < 6) {
        errorPassword.innerText = "Weak password";
        return false;
    }  
    else {
        errorPassword.innerText = "";
        return true;
    }
        
}

function CheckCpassword(cPassword, password) {
    if (password != cPassword) {
        errorCpassword.innerText = "Passwords does not match";
        return false;
    }
    else {
        errorCpassword.innerText = "";
        return true;
    } 
}

function CheckAccept(accept) {
    if (accept.checked == false) {
        errorAccept.innerText = "Checkbox must be checked";
        return false;
    }  
    else {
        errorAccept.innerText = "";
        return true;
    }  
}
