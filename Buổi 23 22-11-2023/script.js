// tạo ra một bản mô phỏng xe hơi, từ đó tạo ra các đối tượng xe hơi thực tế

// tạo class car - mô phỏng đối tượng cần quản lý trong chương trình
class Car {
    // mô tả thuộc tính
     CarName = "VinFast VF 8";
     BrandName ="VinFast";
     CarColor = "red";

     //mô tả hành động/ phương thức
      moveForward() {
        console.log("The car is moving forward");
     }
}
// tạo và tương tác với đối tượng của class car
car1 = new Car();
console.log(car1.CarName);
console.log(car1.BrandName);
console.log(car1.CarColor);
car1.moveForward();

car2 = new Car();
console.log(car2.CarName);
console.log(car2.BrandName);
console.log(car2.CarColor);
car2.moveForward();

car3 = new Car();
console.log(car3.CarName);
console.log(car3.BrandName);
console.log(car3.CarColor);
car3.moveForward();
