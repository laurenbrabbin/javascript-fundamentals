const isValidLength = (phoneNumber) => {
  if (phoneNumber.length === 11) {
    return true; 
  } else {
    return false;
  }
}

module.exports = isValidLength;