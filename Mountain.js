//Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

let word = 'mountain'

const capital = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(capital(word));