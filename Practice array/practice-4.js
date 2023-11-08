// Bài 4: Cho 2 array có cùng số phần tử với nhau. 
let array1 = [10, 20, 30, 40];
let array2 = [100, 200, 300, 400];

// Hãy in các thành phần trong 2 array theo format dưới đây (sử dụng document.write)
/**
 * 10 400
 * 20 300
 * 30 200
 * 40 100
 */
document.write ("/** <br>");
document.write("*"+array1[0]+" "+array2[3]);
document.write("<br>");
document.write("*"+array1[1]+" "+array2[2]);
document.write("<br>");
document.write("*"+array1[2]+" "+array2[1]);
document.write("<br>");
document.write("*"+array1[3]+" "+array2[0]);
document.write("<br>");
document.write("*/");