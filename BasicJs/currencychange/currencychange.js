
function convert() {
    let a = document.getElementById("amount1").value;
    let b = document.getElementById("select1").value;
    let c = document.getElementById("select2").value;
    let d;

    if (b === c) {
        document.write("1")
    }
    if (b === "Vietnam" && c === "USD") {
        d = a / 24000;
       document.write(d)
    }

    if (b === "USD" && c === "Vietnam") {
        d = a * 24000;
        document.write(d)
    }
}

