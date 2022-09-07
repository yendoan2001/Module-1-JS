let year = parseInt(prompt("Nhập 1 năm bất kì"));
if (year % 4 === 0) {
    if(year % 100 === 0) {
        if(year % 400===0) {
            alert("Đây là năm nhuận")
        } else {
            alert("Đây k là năm nhuận")
        }
    }else {
        alert("Đây là năm nhuận")
    }
} else{
    alert ('Đây k là năm nhuận')
}