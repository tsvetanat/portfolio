document.contactForm.addEventListener("submit", (event) => {
    const contactForm = event.target;
    if (!validateContactForm(contactForm)) {
      event.preventDefault();
    }
  });


function displayError(elemId, errorId, messageId) {
    const formElement = document.getElementById(elemId);
    const errorElement = document.getElementById(errorId);
    formElement.className = "invalid";
    errorElement.className = "error active";
    errorElement.innerHTML = messageId;
}

function validateContactForm(contactForm) {
    let name = contactForm.name.value;
    let email = contactForm.email.value;
    let phone = contactForm.phone.value;
    let subject = contactForm.subject.value;
    let message = contactForm.message.value;

    const nameRegex = /^[a-zA-Z\s]+$/;    
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

    let nameError = emailError = phoneError = subjectError = messageError = true;
    
    if(name == "") {
        displayError("name","nameError", "Please enter your name");
    } else {
                    
        if(nameRegex.test(name) === false) {
            displayError("name", "nameError", "Please enter a valid name");
        } else {
            nameError = false;
        }
    }

    if(email == "") {
        displayError("email","emailError", "Please enter your email address");
    } else {
        if(emailRegex.test(email) === false) {
            displayError("email", "emailError", "Please enter a valid email address");
        } else{
            emailError = false;
        }
    }

    if(phone == "") {
        phoneError = false;
    } else {
       
        if(phoneRegex.test(phone) === false) {
            displayError("phone", "phoneError", "Please enter a valid 10 digit mobile number");
        } else{
            phoneError = false;
        }
    }  
    
    if(subject == "") {
        displayError("subject","subjectError", "Please enter a subject");
    }else{
        subjectError = false;
    }
    
    if(message =="") {
        displayError("message","messageError", "Please enter a message");
    }else{

        messageError = false;
    }

    if((nameError || emailError || phoneError || subjectError || messageError) == true) {
       return false;
    } else {
        return true;
    }
};

