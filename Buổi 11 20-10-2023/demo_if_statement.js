let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
let billValue = parseFloat(document.getElementById("bill-value").value);
alert(billValue);
alert(typeof(billValue));

if(billValue >= 2000000) {
    alert(`Bạn đã được giảm giá ${billValue*0.1}`);
    billValue*=0.9;
}
let infoElem = document.getElementById("info");
infoElem.innerText = `Bạn cần thanh toán ${billValue} VND`;
});