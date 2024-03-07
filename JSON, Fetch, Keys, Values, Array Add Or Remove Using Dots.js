// Json : - > Stringefy , parse
const student = {
  name: "sakib",
  age: 34,
  mpvies: ["kinge kahan", "Dhaker msatan"],
};
const studentJson = JSON.stringify(student);
console.log(student);

console.log(studentJson);

//  2 fatch
fatch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

const prodesh = { name: "welcome", pries: 70, barand };
const newProduct = [...prodesh, " crlkboook"];

// 3.keys, values
const keays = Object.keys(student);
const values = Object.values(student);

// 4. add remove in array
const prodac = [
  { name: "sujon", pries: 340, brand: "len", color: "silver" },
  { name: "rofiq", pries: 340, brand: "len", color: "silver" },
  { name: "jobbar", pries: 340, brand: "len", color: "silver" },
  { name: "bosu", pries: 340, brand: "len", color: "silver" },
  { name: "hero", pries: 340, brand: "len", color: "silver" },
];
const newadd = { name: "webcame", pries: 700, brand: "lal" };

// copy products array and then add new product
const item = [...prodac, newaddt];

// remove phone  means create a new array without phone
const ramanin = phone.filter((p) => p.name !== "phoen");
console.log(ramanin);
