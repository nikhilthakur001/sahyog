function onLogin() {
    $("#loginErr").empty();
    if($("#username").val()=="admin" && $("#password").val()=="admin") {
        window.location.href = "/forms/about.html"
        localStorage.setItem("loggedIn", true);
    } else {
        $("#loginErr").append("Wrong username/password");
    }
}