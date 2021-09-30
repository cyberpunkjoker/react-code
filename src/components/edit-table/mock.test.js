import makeColumns from "./config";
const dataNum = 10;

const list = makeColumns();
console.log(list);

let mockDataItem = {};

list.forEach((i) => {
  if (!i.children) {
    mockDataItem[i.dataIndex] = 0;
  } else {
    i.children.forEach((chil) => {
      mockDataItem[chil.dataIndex] = 0;
    });
  }
});

export default new Array(dataNum).fill("").map((i) => mockDataItem);
