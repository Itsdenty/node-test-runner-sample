/*
 * Library functions
 *
 */

const lib = {};
// Generate a dummy name
lib.generateDummyName = () => {
  const xterBank = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let fstring = '';
  for (let i = 0; i < 7; i += 1) {
    fstring += xterBank[parseInt(Math.random() * 52, 10)];
  }
  return fstring;
};

// reverse a string
lib.flipString = (str) => {
  str = typeof(str) == 'string' && str.length > 0 ? str : false;
  if(str) {
    let flippedString = '';
    let strLength = str.length -1;
    for(let i=strLength; i >= 0; i--) {
      flippedString += str[i];
    }
    return flippedString;
  } else {
    return false;
  }
};

// return a slug from a string
lib.slugIt = (str) => {
  str = typeof(str) == 'string' && str.length > 0 ? str : false;
  if (str) {
    return str.replace(/\s/g, '_');
  } else {
    return false;
  }
};

// export the library
module.exports = lib;
