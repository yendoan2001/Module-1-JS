a = prompt("Nhập điểm Vật Lý");
b = prompt("Nhập điểm Hóa Học");
c = prompt("Nhập điểm Sinh Học");
let Physics = parseInt(a);
let Chemistry = parseInt(b);
let Biology = parseInt(c);
let average = (Physics + Chemistry + Biology)/3;
alert("Điểm trung bình là: " + average);