const findTheOldest = function(list) {
    const getAge = function(birth, death) {
        if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
    };
    const oldest = list.sort((a,b) => getAge(a.yearOfBirth, a.yearOfDeath) > getAge(b.yearOfBirth, b.yearOfDeath) ? -1:1)
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
