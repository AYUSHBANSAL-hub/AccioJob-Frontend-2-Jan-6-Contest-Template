/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map((item) => {
    if (item.profession == "developer") {
      console.log(item);
    }
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //   console.log(arr.filter((item) => item.profession != "admin"));
  arr = arr.filter((item) => item.profession != "admin");
  console.log(arr);
}
