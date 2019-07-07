function onLogin() {
    $("#loginErr").empty();
    if($("#username").val()=="admin" && $("#password").val()=="admin") {
        window.location.href = "/"
        localStorage.setItem("loggedIn", true);
    } else {
        $("#loginErr").append("Wrong username/password");
    }
}