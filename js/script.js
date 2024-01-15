const schools = ["UI", "Uniabuja", "Bowen", "CU", "Landmark", "Lautech"];
const result = schools.findIndex((item) => item === "Landmark");
console.log(result);

schools.push("Kwasu");

const editedSchoolsInfo = schools.map((item) => item + "!");
console.log(editedSchoolsInfo);

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function transformToObjects(numberArray) {
  let editedNumberArray = numberArray.map((number) => ({ val: number }));
  return editedNumberArray;
}

const answer = transformToObjects(numberArray);
console.log(answer);
