let year = parseInt(prompt("Nhập 1 năm bất kì"));
if (year % 4 === 0) {
    if(year % 100 === 0) {
        if(year % 400===0) {
            alert(year + " is leap year")
        } else {
            alert(year + " is not leap year")
        }
    } else {
        alert(year + " is leap year")
    }
} else {
    alert (year + " is not leap year")
}