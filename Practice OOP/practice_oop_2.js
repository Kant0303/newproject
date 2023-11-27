/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */
class Vehicle{
    constructor(TenChuXe,LoaiXe,DungTich,TriGia){
        this.TenChuXe = TenChuXe;
        this.LoaiXe = LoaiXe;
        this.DungTich = DungTich;
        this.TriGia = TriGia;

    }
    
    
    showInfo (){
         let tienThue = 1;
        if (this.DungTich < 100){
            (tienThue = this.TriGia/100);
        }else if (this.DungTich>=100 && this.DungTich<=200){
            tienThue = this.TriGia*3/100;
        }else {
            tienThue = this.TriGia*5/100;
        }
        console.log(`Tên chủ xe: ${this.TenChuXe}`);
        console.log(`Loại xe: ${this.LoaiXe}`);
        console.log(`Dung tích: ${this.DungTich}`);
        console.log(`Trị giá: ${this.TriGia}`);
        console.log(`Thuế phải nộp ${tienThue}`);
    }
}
Vehicle1 = new Vehicle("Nhơn","sirius",100,20000000);
Vehicle1.showInfo();
Vehicle2 =new Vehicle("Tâm","SYM",50,10000000);
Vehicle2.showInfo();
Vehicle3 = new Vehicle("Min","Honda CBR",250,600000000);
Vehicle3.showInfo();