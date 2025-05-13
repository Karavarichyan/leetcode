const mystr = 'burger';

const reverseString = (str) => {
  const reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}

const reverseString2 = (str) => {
  return str.split('').reverse().join('');
}

// console.log(reverseString(mystr));
console.log(reverseString2(mystr));
