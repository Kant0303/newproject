/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isLeapYear(2016)
 * 
 * Output:
 * false
 *  */ 
function isLeapYear(year) {
    if (year%4 ==0 && year%100 ==0){
        if (year%400 ==0){
            result = true;
        }else result = false;
    }else if (year%4 ==0 && year%100 !==0){
        result = true;
    }else (year%4 !==0)
        result = false;
    
    return result;
}

console.log(isLeapYear(2016));