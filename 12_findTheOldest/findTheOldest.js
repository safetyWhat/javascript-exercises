const findTheOldest = function (array) {
    return array.reduce((thatPerson, thisPerson) => {
      const thatAge = getAge(thatPerson.yearOfBirth, thatPerson.yearOfDeath);
      const thisAge = getAge(
        thisPerson.yearOfBirth,
        thisPerson.yearOfDeath
      );
      return thatAge < thisAge ? thisPerson : thatPerson;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
