// Exercise 1: Tạo đối tượng
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
  };
  document.getElementById("exercise1").textContent = `Thông tin đối tượng: ${JSON.stringify(person, null, 2)}`;
 
  // Exercise 2: Truy xuất thuộc tính
  console.log("Thông tin đối tượng:", person);
  document.getElementById("exercise2").textContent = `Thông tin đối tượng: ${JSON.stringify(person, null, 2)}`;
  
  // Exercise 3: Thêm và xoá thuộc tính
  person.phone = "123-456-7890";
  delete person.address;
  console.log("Đối tượng sau khi thêm và xoá thuộc tính:", person);
  document.getElementById("exercise3").textContent = `Đối tượng sau khi thêm và xoá thuộc tính: ${JSON.stringify(person, null, 2)}`;
  
  // Exercise 4: Duyệt qua thuộc tính
  console.log("Duyệt qua thuộc tính đối tượng:");
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  document.getElementById("exercise4").textContent = "Xem console để xem kết quả.";
  
  // Exercise 5: Đối tượng con
  const addressInfo = {
    city: "Anytown",
    country: "USA",
  };
  
  person.addressInfo = addressInfo;
  console.log("Đối tượng sau khi thêm đối tượng con:", person);
  document.getElementById("exercise5").textContent = `Đối tượng sau khi thêm đối tượng con: ${JSON.stringify(person, null, 2)}`;
  
  // Exercise 6: Số lượng phần tử
  const propertyCount = Object.keys(person).length;
  console.log("Số lượng thuộc tính trong đối tượng:", propertyCount);
  document.getElementById("exercise6").textContent = `Số lượng thuộc tính trong đối tượng: ${propertyCount}`;
  
  // Exercise 7: Chuyển đổi sang mảng
//   const personArray = Object.entries(person);
//   console.log("Đối tượng chuyển đổi thành mảng:", personArray);
//   document.getElementById("exercise7").textContent = `Đối tượng chuyển đổi thành mảng: ${JSON.stringify(personArray, null, 2)}`;
  const personArray = Object.entries(person).map(([key, value]) => {
  // Check if the value is a function, if true, call it
    return [key, typeof value === 'function' ? value() : value];
  });
  console.log("Đối tượng chuyển đổi thành mảng:", personArray);
  document.getElementById("exercise7").textContent = `Đối tượng chuyển đổi thành mảng: ${JSON.stringify(personArray, null, 2)}`;

  // Exercise 8: So sánh đối tượng
  const person2 = { name: "John Doe", age: 25, phone: "123-456-7890" };
  const isEqual = JSON.stringify(person) === JSON.stringify(person2);
  console.log("So sánh đối tượng:", isEqual);
  document.getElementById("exercise8").textContent = `So sánh đối tượng: ${isEqual ? "Bằng nhau" : "Không bằng nhau"}`;
  
  // Exercise 9: Kiểm tra tồn tại thuộc tính
  const hasAgeProperty = "age" in person;
  console.log("Kiểm tra tồn tại thuộc tính 'tuổi':", hasAgeProperty);
  document.getElementById("exercise9").textContent = `Kiểm tra tồn tại thuộc tính 'tuổi': ${hasAgeProperty ? "Có" : "Không"}`;
  