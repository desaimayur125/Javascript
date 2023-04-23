const sportsGroups = [
  {
    Name: 'Ravindra',
    Sports: ['Chess', 'Cricket'],
  },
  {
    Name: 'Ravi',
    Sports: ['Cricket', 'Football'],
  },
  {
    Name: 'Rishabh',
    Sports: ['Table-Tennis', 'Football'],
  },
];

const result = {};

sportsGroups.forEach((person) => {
  person.Sports.forEach((sport) => {
    if (result[sport]) {
      result[sport].push(person.Name);
    } else {
      result[sport] = [person.Name];
    }
  });
});

console.log(Object.entries(result).map(([key, value]) => ({ [key]: value })));
