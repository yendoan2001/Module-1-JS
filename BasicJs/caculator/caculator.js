function phepcong() {
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    document.getElementById('result').innerHTML = a + b;

}
function pheptru() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML= a - b;
}

function phepnhan() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML= a * b;
}

function phepchia() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML= a / b;
}
