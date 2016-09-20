var list1 = [1, 2, 3, 4, 5];
var list2 = ['a', 'b', 'c', 'd', 'e'];

function zipList(list1, list2) {
  let returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i]);
    returnList.push(list2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));