
/**
 * Get GPA Function
 */

const getGPA = (mark) => {

    let gpa;

    if ( mark < 33) {
        gpa = 0        
    } else if (mark >= 33 && mark < 40) {
        gpa = 1
    } else if (mark >= 40 && mark < 50) {
        gpa = 2
    } else if (mark >= 50 && mark < 60) {
        gpa = 3
    } else if (mark >= 60 && mark < 70) {
        gpa = 3.5
    } else if (mark >= 70 && mark < 80) {
        gpa = 4
    } else if (mark >= 80 && mark <= 100) {
        gpa = 5
    } else {
        gpa = 'invalid'
    }
    
    return gpa;
}


/**
 *  Get Grade Mark Function
 */

const getGrade = (mark) => {

    let grade;

    if ( mark < 33) {
        grade = 'F'        
    } else if (mark >= 33 && mark < 40) {
        grade = 'D'
    } else if (mark >= 40 && mark < 50) {
        grade = 'C'
    } else if (mark >= 50 && mark < 60) {
        grade = 'B'
    } else if (mark >= 60 && mark < 70) {
        grade = 'A-'
    } else if (mark >= 70 && mark < 80) {
        grade = 'A'
    } else if (mark >= 80 && mark <= 100) {
        grade = 'A+'
    } else {
        grade = 'invalid'
    }
    
    return grade;
}
