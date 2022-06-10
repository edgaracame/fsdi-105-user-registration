    //Object Constructor
function User(email, password, fname, lname, age, address, phone, payment, color){
    this.email = email;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

    //Validation
function isValid(user){
    let valid = true;

    if(user.email.length == 0){
        valid = false;
        $("#txtEmail").addClass("input-error");
        setTimeout(function(){
            $("#txtEmail").removeClass("input-error");
        }, 3000);
    }
    if(user.password.length == 0){
        valid = false;
        $("#txtPassword").addClass("input-error");
        setTimeout(function(){
            $("#txtPassword").removeClass("input-error");
        }, 3000);
    }
    if(user.fname.length == 0){
        valid = false;
        $("#txtFirstName").addClass("input-error");
        setTimeout(function(){
            $("#txtFirstName").removeClass("input-error");
        }, 3000);
    }
    if(user.lname.length == 0){
        valid = false;
        $("#txtLastName").addClass("input-error");
        setTimeout(function(){
            $("#txtLastName").removeClass("input-error");
        }, 3000);
    }

    return valid;
}

    //Password
function validatePass(){
    let txtPassword = $("#txtPassword");
    let password = txtPassword.val();

    if(password.length < 6){
        txtPassword.css("background", "#ff7777");
        displayError("The password is too short!");
    }
    else{
        txtPassword.css("background", "var(--white)");
        hideError();
    }
}

    //Error
function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
    setTimeout(function(){
        $("#alertError").addClass("hide");
    }, 3000);
}

function hideError(){
    $("#alertError").addClass("hide");
}

    //Register Function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhone = $("#txtPhone").val();
    let userPayment = $("#txtPayment").val();
    let userColor = $("#txtColor").val();

    let newUser = new User(userName, userPass, userFirstName, userLastName, userAge, userAddress, userPhone, userPayment, userColor);

    if(isValid(newUser) == true){
        saveUser(newUser);
        hideError();

        $("input").val("");
        $("select").val("");
    }
    else{
        displayError("Please, complete all the fields!");
    }
}

function init(){
    $("#btnRegister").click(register);
    $("#txtPhone").keypress(function(e){
        if(e.key == "Enter"){
            register();
        }
    });
    $("#txtPassword").keyup(validatePass);
}
window.onload = init;