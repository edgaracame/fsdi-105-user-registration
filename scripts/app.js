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

    console.log(newUser);

    $("input").val("");
    $("select").val("");
}

function init(){
    $("#btnRegister").click(register);
}
window.onload = init;