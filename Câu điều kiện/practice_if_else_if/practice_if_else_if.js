function insert() {
    let inputName = document.getElementById("input_name").value;
    if (inputName === "Admin") {
        document.getElementById("password").focus();
    } else if (inputName === "") alert("Canceld")
    else alert("I don't know you")
}
function pass() {
    let passWord = document.getElementById("password").value;
        if (passWord === "TheMaster") alert("Welcome")
        else if (passWord === "") alert("Canceld")
        else alert ("Wrong password")
}





