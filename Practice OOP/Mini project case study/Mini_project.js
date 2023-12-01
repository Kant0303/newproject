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
    constructor(vehicleId,ownerName,vehicleType,cylinderCapacity,cost){
        this.vehicleId = vehicleId;
        this.ownerName = ownerName;
        this.vehicleType = vehicleType;
        this.cylinderCapacity = cylinderCapacity;
        this.cost = cost;
    }
    taxValue(){
        let taxValue = 0;
        if (this.cylinderCapacity < 100){
            taxValue = 0.01* this.cost;
        }else if (this.cylinderCapacity >=100 && this.cylinderCapacity<=200){
            taxValue = 0.03 * this.cost;
        }else {
            taxValue = 0.05*this.cost;
        }
        return taxValue;
    }
    
    showInfo (){
        console.log("----------------------------");
        console.log(`Vehicle ID: ${this.vehicleId}`);
        console.log(`Tên chủ xe: ${this.ownerName}`);
        console.log(`Loại xe: ${this.vehicleType}`);
        console.log(`Dung tích: ${this.cylinderCapacity}`);
        console.log(`Trị giá: ${this.cost}`);
        console.log(`Thuế phải nộp ${this.taxValue()}`);
        console.log("----------------------------");
    }
}

function addVehicle(){
    let vehicleId = document.getElementById("vehicle-id").value;
    let ownerName = document.getElementById("OwnerName").value;
    let vehicleType = document.getElementById("vehicle-type").value;
    let cylinderCapacity = parseInt(document.getElementById("cylinder-capacity").value);
    let cost = parseFloat(document.getElementById("cost").value);

//create new vehicle object
    let newVihicle = new Vehicle(vehicleId,ownerName, vehicleType, cylinderCapacity, cost);
// add new object to array    

    vehicleArray.push(newVihicle);
    alert("Vehicle is added succesfully");
    console.log(vehicleArray);

    updateVehicleTable(vehicleArray);
}

function searchVehicle(){
    let searchID = document.getElementById("search-value").value;

    for (let i in vehicleArray){
       let vehicle = vehicleArray[i];
       if (vehicle.vehicleId === searchID){
        vehicle.showInfo();
        alert(`owner Name:${vehicle.ownerName},vehicle type: ${vehicle.vehicleType},tax value: ${vehicle.taxValue()}`)
        break;
       }
    }
}
function deleteVehicle(){
    let searchID = document.getElementById("search-value").value;

    for (let i in vehicleArray){
       let vehicle = vehicleArray[i];
       if (vehicle.vehicleId === searchID){
        // delete item at index i in array
        vehicleArray.splice(i, 1);
        updateVehicleTable(vehicleArray);
        alert("deleted successfully");
        break;
       }
    }
}
function updateVehicle(){
    let vehicleID = document.getElementById("vehicle-id").value;
    let ownerName = document.getElementById("OwnerName").value;
    let vehicleType = document.getElementById("vehicle-type").value;
    let cylinderCapacity = parseInt(document.getElementById("cylinder-capacity").value);
    let cost = parseFloat(document.getElementById("cost").value);

    for(let i in vehicleArray){
        let vehicle = vehicleArray[i];
        if (vehicle.vehicleId ==vehicleID){
            vehicle.ownerName = ownerName;
            vehicle.vehicleType= vehicleType;
            vehicle.cylinderCapacity=cylinderCapacity;
            vehicle.cost=cost;
            alert("Vehicle is updated successfully");
            updateVehicleTable(vehicleArray);
            break;
        }
    }
}

// Update vehicle table based on data array
function updateVehicleTable(data){
    // delete old table
     let tableElem = document.getElementById("vehicle-table");
     tableElem.remove();
     
     // create new table again
     let newTableElem =document.createElement("table");
     
     // set id for new table
     newTableElem.setAttribute("id","vehicle-table");
    
     // create heading row
     let newRowElem = document.createElement("tr");
     let heading1 = document.createElement("th");
     let heading2 = document.createElement("th");
     let heading3 = document.createElement("th");
     let heading4 = document.createElement("th");
     let heading5 = document.createElement("th");
     let heading6 = document.createElement("th");
     
     heading1.innerText ="No.";
     heading2.innerText ="Owner Name";
     heading3.innerText ="Vehicle Type";
     heading4.innerText ="Cylinder Capacity";
     heading5.innerText ="Cost";
     heading6.innerText ="Tax Value";

     newRowElem.appendChild(heading1);
     newRowElem.appendChild(heading2);
     newRowElem.appendChild(heading3);
     newRowElem.appendChild(heading4);
     newRowElem.appendChild(heading5);
     newRowElem.appendChild(heading6);
     
     //append row totable
     newTableElem.appendChild(newRowElem);
     //add data row
     for (let i in data){
        let vehicle = data[i];
        newRowElem = document.createElement("tr");
        let info1 = document.createElement("td");
        let info2 = document.createElement("td");
        let info3 = document.createElement("td");
        let info4 = document.createElement("td");
        let info5 = document.createElement("td");
        let info6 = document.createElement("td");

        info1.innerText= i;
        info2.innerText = vehicle.ownerName;
        info3.innerText = vehicle.vehicleType;
        info4.innerText = vehicle.cylinderCapacity;
        info5.innerText = vehicle.cost;
        info6.innerText = vehicle.taxValue();

        newRowElem.appendChild(info1);
        newRowElem.appendChild(info2);
        newRowElem.appendChild(info3);
        newRowElem.appendChild(info4);
        newRowElem.appendChild(info5);
        newRowElem.appendChild(info6);
        
        //append row to table
        newTableElem.appendChild(newRowElem);
     }
     document.body.appendChild(newTableElem);
    }
let vehicleArray = [];