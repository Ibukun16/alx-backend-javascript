/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const value of array) {
    myArray.push(appendString + value);
  }

  return myArray;
}
