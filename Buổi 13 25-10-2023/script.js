let BtnElem = document.getElementById("btn");
BtnElem.addEventListener("click" , () => {
    let SoGioLam = parseInt(document.getElementById("SoGio").value);
    let CapBacNhanVien  = parseInt(document.getElementById("CapBac").value);
    if (SoGioLam >=400){
        if (CapBacNhanVien ==1){
            alert("bạn được thưởng 1000$");
        }else {
            alert("bạn được thưởng 2000$");
        }
    }else{
        alert("Bạn chưa đủ tiêu chuẩn nhận thưởng")
    }
});