const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const personalisedMessage = (person) => {
  console.log(`Hi ${person.name}! ${person.discount} off our best candies for you today!`)
};

const generateMessages = (namesAndDiscounts) => {
  console.log(namesAndDiscounts.map(personalisedMessage))
};

generateMessages(namesAndDiscounts);