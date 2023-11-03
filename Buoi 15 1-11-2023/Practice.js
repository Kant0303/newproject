let Btn1 =document.getElementById("btn1").addEventListener("click" , () =>{
    let SoNguyen1 = parseInt(document.getElementById("Son1").value);
    for (let i = 0 ; i <= SoNguyen1 ; i++){
        let sum =0;
        if (i%2 ==0){
            sum += i;
        }console.log(sum);
    }
});
let Btn2 = document.getElementById("btn2");
Btn2.addEventListener("click" , () => {
    let SoNguyen2 = parseInt(document.getElementById("SoN2").value);
    let GiaiThua =1;
    for (let i =1 ; i<=SoNguyen2 ; i ++){
         GiaiThua  *=i;
    } console.log(GiaiThua);
});
let Btn3 = document.getElementById("btn3").addEventListener("click" , () =>{
    let SoHangDauTien = parseFloat(document.getElementById("SoHang").value);
    let CongSai = parseInt(document.getElementById("CongSai").value);
    let count = 0
    
    for (let i = SoHangDauTien; ; i += CongSai){
        console.log(i);
        count +=1;
        if (count ==10){
            break ;
        }
    }
});
let btn4 = document.getElementById("btn4").addEventListener("click", () =>{
    let SoNguyen4 = parseInt(document.getElementById("SoN4").value);
    for (let i = 1 ; i <= 10 ; i++){
        let KetQua = SoNguyen4*i;
        console.log(KetQua);
    }
});
let Btnelem5 = document.getElementById("Btn5").addEventListener("click", () => {
    let SoNguyen5 = parseInt(document.getElementById("SoN5").value);
    for (let i =1; i < SoNguyen5 ; i++);
      let sum =0
    if (SoNguyen5%i ==0){
         sum +=i;
    }if (sum == SoNguyen5){
        alert("Đây là số hoàn hảo");
    } else alert("Đây không phải số hoàn hảo");
});
