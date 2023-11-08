//  Hãy tạo ra một array mới bằng cách gộp hai array ban đầu.
let array1 = ["Hello ", "take "];
let array2 = ["Dear", "Sir"];
let array3 = [array1[0]+array2[0],array1[0]+array2[1],array1[1]+array2[0],array1[1]+array2[1]        ];

console.log(array3); // Output: ["Hello Dear", "Hello Sir", "take Dear", "take Sir"]