export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  let index = 0;
  for (const elt of array) {
    newArray[index] = appendString + elt;
    index += 1;
  }
  return newArray;
}
