const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const form = document.querySelector("#signupForm");
const button = document.querySelector("#submit");

let valid = false;

firstName.addEventListener("blur", validate);
lastName.addEventListener("blur", validate);
email.addEventListener("blur", validate);
phone.addEventListener("blur", validate);
password.addEventListener("blur", validate);
confirmPass.addEventListener("blur", validate);
form.addEventListener("submit", submitForm);


function validate(e){
    e.target.classList.remove("invalid");
    e.target.nextElementSibling.textContent = "";
    if(!e.target.validity.valid){
        showError(e);
    }
}

function submitForm(e){
    if(!firstName.validity.valid || !lastName.validity.valid || !email.validity.valid || !password.validity.valid || !confirmPass.validity.valid || password.value !== confirmPass.value){
        showError();
        e.preventDefault();
    }
}

function showError(e){   
    //e.target.classList.add("invalid");

    if(!firstName.validity.valid){
        if(firstName.validity.valueMissing){ 
            firstName.nextElementSibling.textContent = "First Name is required";
            firstName.classList.add("invalid");
        }
    }
    if(!lastName.validity.valid){
        if(lastName.validity.valueMissing){
            lastName.nextElementSibling.textContent = "Last Name is required";
            lastName.classList.add("invalid");
        }
    }
    if(!email.validity.valid){
        if(email.validity.valueMissing){
            email.nextElementSibling.textContent = "Email address is required";
            email.classList.add("invalid");
        } else if(email.validity.typeMismatch){
            email.nextElementSibling.textContent = "Incorrect email format";
            email.classList.add("invalid");
        }
    }
    if(!password.validity.valid){
        if(password.validity.valueMissing){
            password.nextElementSibling.textContent = "Password is required";
            password.classList.add("invalid");
        }
        if(password.validity.tooShort){
            password.nextElementSibling.textContent = "Password is too short";
            password.classList.add("invalid");
        } else if(password.validity.tooLong){
            password.nextElementSibling.textContent = "Password is too long";
            password.classList.add("invalid");
        }
    }
    if(confirmPass.value === ""){
        if(!confirmPass.validity.valid){
            if(confirmPass.validity.valueMissing){
                confirmPass.nextElementSibling.textContent = "Password confirmation is required";
                confirmPass.classList.add("invalid");
            }else if(confirmPass.validity.tooShort){
                confirmPass.nextElementSibling.textContent = "Password is too short";
                confirmPass.classList.add("invalid");
            } else if(confirmPass.validity.tooLong){
                confirmPass.nextElementSibling.textContent = "Password is too long";
                confirmPass.classList.add("invalid");
            }
        }
        } else {
            if(password !== confirmPass){
                confirmPass.nextElementSibling.textContent = "Passwords must match";
                confirmPass.classList.add("invalid");
            }
    }
}