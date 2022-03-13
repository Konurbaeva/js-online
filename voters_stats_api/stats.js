/**
 * @param {number[]} ages
 */
 export function getVotersCount(ages) {
    console.log(ages);
   return ages.filter(age => age >= 18).length;
}


/* export function getVotersCount(ages) {
    return ages.filter(function(age){
        return age >= 18;
    }).length;
}

or (without chaining):
 export function getVotersCount(ages) {
    const filteredVoters = ages.filter(function(age){
        return age >= 18;
    });
    return filteredVoters.length;
} */