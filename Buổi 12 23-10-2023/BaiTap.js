let btn_1 = document.getElementById("btn1");
btn_1.addEventListener("click",() =>{
    let Chieu_Dai = parseFloat(document.getElementById("ChieuDai").value);
    let Chieu_Rong = parseFloat(document.getElementById("ChieuRong").value);
    if (Chieu_Dai === Chieu_Rong) {
        alert("đây là hình vuông ");
    } else {
        alert(" đây là hình chữ nhật")
    }
});
let btn_2 = document.getElementById("btn2");
btn_2.addEventListener("click", () =>{
    let So_A = parseInt(document.getElementById("A").value);
    let So_B =parseInt(document.getElementById("B").value);
    if (So_A > So_B) {
        alert(`số lớn nhất là: số${So_A}`);
    }else (So_A < So_B) 
        alert(`số lớn nhất là: số${So_B}`);
    
});
let btn_3 = document.getElementById("btn3");
btn_3.addEventListener("click", () => {
let So_N = parseInt(document.getElementById("soN").value);
if (So_N >= 0){
    alert(`giá trị tuyệt đối của ${So_N} là ${So_N}`)
} else {
    alert(` giá trị tuyệt đối của ${So_N}là ${-So_N}`)
}

});
let btn_4 = document.getElementById("btn4").addEventListener("click", () => {
    let Day = parseInt(document.getElementById("Ngay").value);
    if (Day == 2) alert ("Monday");
    else if ( Day ==3) alert ("Tuesday");
    else if ( Day == 4) alert (" Wednesday");
    else if (Day == 5) alert ("Thurday ");
    else if ( Day ==6) alert  ("Friday") ;
    else if (Day == 7) alert ("Satuday");
    else  alert ("Sunday");
    
});
let btn_5 = document.getElementById("btn5").addEventListener("click", () =>{
let Number1 = parseFloat(document.getElementById("n1").value);
let Number2 = parseFloat(document.getElementById("n2").value);
let Number3 = parseFloat(document.getElementById("n3").value);
if (Number1 >= Number2 && Number1 >=Number3){
    alert (` số lớn nhất là ${Number1}`);

}else if(Number2 >= Number1 && Number2>= Number3){
    alert (` số lớn nhất là ${Number2}`);
}else alert(` số lớn nhất là ${Number3}`);


});
