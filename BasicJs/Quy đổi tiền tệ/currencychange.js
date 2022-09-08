function convert() {
    const EXCHANGE_RATE = 23000;
    let a = +document.getElementById("amount").value;
    let b = document.getElementById("from").value;
    let c = document.getElementById("to").value;

    if (b === c) document.write("1")
    else if (b === "VND") {
        document.write(a / EXCHANGE_RATE + '')
    } else {
        document.write(a * EXCHANGE_RATE + '')
    }
}

