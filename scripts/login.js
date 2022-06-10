function login(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();

    let flag = false;

    let userList = readUsers();

    for(i = 0; i < userList.length; i++){
        let user = userList[i];

        if(user.email == inputEmail && user.password == inputPassword){
            flag = true;
            window.location = "users.html";
        }

        if(!flag){
            displayError("Invalid credentials!");
            setTimeout(function(){
                $("#loginError").addClass("hide");
            }, 3000);
        }
    }
}

function displayError(msg){
    $("#loginError").removeClass("hide").text(msg);
}

function init(){
    $("#btnLogin").click(login);
    $("#txtPassword").keypress(function(e){
        if(e.key == "Enter"){
            login();
        }
    });
}
window.onload = init;