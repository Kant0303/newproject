let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
let billValue = parseFloat(document.getElementById("bill-value").value);

if(billValue> 4000000){
    alert(` Bạn đã được giảm giá ${billValue*0.2}VND`);
    billValue*=0.8;
} else if (billValue>= 2500000){
    alert(`Bạn đã được giảm giá ${billValue*0.15}VND`);
    billValue*= 0.85;
}else if (billValue>= 1500000){
    alert(`Bạn đã được giảm giá ${billValue-200000}VND`);
    billValue-=200000;
}else {
    alert(` đơn hàng của bạn không được giảm giá`);
}


let infoElem = document.getElementById("info");
infoElem.innerText = `Bạn cần thanh toán ${billValue} VND`;
});