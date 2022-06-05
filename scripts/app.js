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
        console.log("Please add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length == 0){
        valid = false;
        console.log("Please add a password");
        $("#txtPassword").addClass("input-error");
    }
    if(user.fname.length == 0){
        valid = false;
        console.log("Please add a first name");
        $("#txtFirstName").addClass("input-error");
    }
    if(user.lname.length == 0){
        valid = false;
        console.log("Please add a last name");
        $("#txtLastName").addClass("input-error");
    }

    return valid;
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

        $("input").val("");
        $("select").val("");
    }
}

function init(){
    $("#btnRegister").click(register);
    $("#txtPhone").keypress(function(e){
        if(e.key == "Enter"){
            register();
        }
    });
}
window.onload = init;