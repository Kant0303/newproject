/**
 * viết hàm isValidAge()nhận vào năm sinh và kiểm tra xem
 * người dùng đã đủ 18 tuổi hay chưa
 * trả kết quả kiểm tra về chương trình chính
 */
let yearOBirth = 2009;
function isValidAge(yearOBirth){
    let currentYear = new Date().getFullYear();
    console.log(`Current year: ${currentYear}`);
    if(currentYear- yearOBirth >= 18){
        result = true;
    }else{
        result = false;
    }
    return result;
}
let testAgeResult= isValidAge(yearOBirth);
console.log(testAgeResult);