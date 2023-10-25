let titleElement= document.getElementById("title");
console.log(titleElement);
console.log(titleElement.innerHTML);
titleElement.innerHTML = "Average Mark calculation";
titleElement.style.color = "red";
// thêm element mới vào student list

// tạo thẻ li mới
let newItemElem =document.createElement("li");
// set up nội dung cho element mới
newItemElem.innerHTML = "3. Evan -9 -8 -8.5";
let studentListElem =document.getElementById("student-list");
studentListElem.appendChild(newItemElem);
// xoá form elem ra khỏi trang web
let studentFormElem =document.getElementById("student-form");
studentFormElem.remove();