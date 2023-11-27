/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle{
    constructor(ChieuDai,ChieuRong){
        this.ChieuDai =ChieuDai;
        this.ChieuRong = ChieuRong;
    }
    showInfo (){
        console.log(`Chiều dài hình chữ nhật là: ${this.ChieuDai}`);
        console.log(`chiều rộng hình chữ nhật là: ${this.ChieuRong}`);
        console.log(`diện tích hình chữ nhật là: ${this.ChieuDai*this.ChieuRong}`);
        console.log(`Chu vi hình chữ nhật là: ${(this.ChieuDai+this.ChieuRong)*2}`);

    }
}
Rectangle1 = new Rectangle(9,5);
Rectangle1.showInfo();