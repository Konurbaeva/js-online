/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
       // TODO: return the number of grades
    return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
        // TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade
    });
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
        // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
      // TODO: return all passing grades (10 and above)
    return grades.filter(function(grade) {
        return grade >= 10;
    });
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
       // TODO: return all failing grades (9 and below)
    return grades.filter(function(grade) {
        return grade < 10;
    });
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}