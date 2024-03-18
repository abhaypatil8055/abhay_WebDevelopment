var validateLoginButton = (event) => {
    var userName = document.querySelector("#uname").value;
    if (userName == "") {
        document.querySelector("#error1").style.display = "block";
        return
    } else {
        document.querySelector("#error1").style.display = "none";
    }

    var password = document.querySelector("#password").value;
    if (password == "") {
        document.querySelector("#error2").style.display = "block";
        return
    } else {
        document.querySelector("#error2").style.display = "none";
    }

    document.querySelector("#root").style.display = "block";
    document.querySelector("#loginForm").style.display = "none";
    window.open("./toDoList.html", "_self");
}