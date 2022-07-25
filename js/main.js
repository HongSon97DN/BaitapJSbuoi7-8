// Thêm số vào mảng

var number = [];

function themSo() {
    var num = Number(document.getElementById("soNguyen").value);

    number.push(num);
    document.getElementById("txtResult").innerHTML = number;
}
document.getElementById("themSo").onclick = themSo;

// Bài 1

function tinhTongDuong() {
    var tongDuong = 0;

    for(var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            tongDuong += number[i];
        }
    }
    document.getElementById("txtResult1").innerHTML = "Tổng số dương là: " + tongDuong;
}
document.getElementById("tinhTongDuong").onclick = tinhTongDuong;

// Bài 2

function demSoDuong() {
    var demSoDuong = 0;
    for(var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById("txtResult2").innerHTML = "Số dương là: " + demSoDuong;
}
document.getElementById("demSoDuong").onclick = demSoDuong;

// Bài 3

function timMin() {
    var min = number[0];

    for(var i = 0; i < number.length; i++) {
        if (min > number[i]) {
            min = number[i];
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nhỏ nhất là: " + min;
}
document.getElementById("timMin").onclick = timMin;

// Bài 4

function timSoDuongMin() {
    var numberDuong = [];
    for(var i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            numberDuong.push(number[i]);
        }
    }

    if (numberDuong != []) {
        var duongMin = numberDuong[0];

        for(var i = 0; i < numberDuong.length; i++) {
            if (duongMin > numberDuong[i]) {
                duongMin = numberDuong[i];
            }
        }
        document.getElementById("txtResult4").innerHTML = "Số dương nhỏ nhất là: " + duongMin;

    } else {
        document.getElementById("txtResult4").innerHTML = "Không có số dương";
    }
}
document.getElementById("timSoDuongMin").onclick = timSoDuongMin;

// Bài 5

function timSoChan() {
    var numberChan = [];

    for(var i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            numberChan.push(number[i]);
        }
    }

    for(var i = 0; i < numberChan.length; i++) {
        var numLast = "";

        if (numberChan[i] % 2 == 0) {
            numLast = numberChan[i];
        }
    }
    document.getElementById("txtResult5").innerHTML = "Số chẵn cuối: " + numLast;
}
document.getElementById("timSoChan").onclick = timSoChan;

// Bài 6


// Bài 7

function sapXepTangDan() {
    numberSx = []; 
    for(var i = 0; i < number.length; i++){
        numberSx.push(number[i]);
    }

    for(var i = 0; i < numberSx.length - 1; i++) {
        for(var j = 0; j < numberSx.length; j++) {
            if(numberSx[j] > numberSx[j+1]) {
                var temp = numberSx[j];
                numberSx[j] = numberSx[j+1];
                numberSx[j+1] = temp;
            }
        }
    }
    document.getElementById("txtResult7").innerHTML = "Mảng sau khi sắp xếp: " + numberSx;
}
document.getElementById("sapXep").onclick = sapXepTangDan;