
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    // TODO: return the number of grades
 return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
    // TODO: return the sum of all the grades
    let sum = 0;
    grades.map((grade) => sum += grade)
   return  sum
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
 return getSumGrades(grades)/grades.length
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    // TODO: return all passing grades (10 and above)
  return grades.filter((grade) => grade >= 10)
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    // TODO: return all failing grades (9 and below)
  return grades.filter((grade) => grade < 9)
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    // TODO: return all the grades raised by 1 (grades should not exceed 20)
 return grades.map((grade) => {
     if(grade +1 >= 20){
        return 20
     } 
     return grade += 1
 })
}