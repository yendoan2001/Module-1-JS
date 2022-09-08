function returncheck() {
    let inputpassword = document.getElementById("inputPassword").value;
    if (inputpassword ===""){
        alert("Hãy nhập mật khẩu")
    } else if (inputpassword.length <6){
        alert("Mật khẩu quá ngắn")
    } else if (inputpassword.length <=20){
        alert("Mật khẩu đủ dài")
    } else alert("mật khẩu quá dài")

    let checkpassword = document.getElementById("inputPassword").value;
    if(checkpassword === inputpassword){
        alert("Submit")
    }else alert("Nhập lại password")

    let phonenumber = document.getElementById("inputPhoneNumber").value;
    if (phonenumber ===""){
        alert("Hãy nhập số điện thoại")
    } else if (phonenumber.length <10){
        alert("SĐT không chính xác")
    } else if (phonenumber.length <=11){
        alert("SĐT chính xác")
    } else alert("SĐT không chính xác")
}