

stuData.map( (data, index) => {

    // if student get more than or equal of 33 in all subjet then they will pass otherwise failed 
    let result;
    data.bangla >= 33 && data.english >= 33 && data.math >= 33 && data.science >= 33 && data.social >= 33 && data.religion >= 33 ? result = 'Passed': result = 'Failed';

    // get sum of all subject's  gpa then divide by 6. (there is 6 subjects)
    let cgpa = getGPA(data.bangla) + getGPA(data.english) + getGPA(data.math) + getGPA(data.science) + getGPA(data.social) +  getGPA(data.religion);
    cgpa = cgpa/6; 

    // if the result got 'failed' then cgpa will be 0
    result == 'Failed' ? cgpa = 0 : '';

    // console output
    console.log(`

            Name    :   ${data.name}
            Class   :   ${data.class}
            Roll    :   ${data.roll}
    ===================================================================================================
        Subject             Mark            GPA             Grade           Result           CGPA
        Bangla              ${data.bangla}              ${getGPA(data.bangla)}               ${getGrade(data.bangla)}               ${result}           ${cgpa.toFixed(2)}
        English             ${data.english}              ${getGPA(data.english)}               ${getGrade(data.english)}                    
        Maths               ${data.math}              ${getGPA(data.math)}               ${getGrade(data.math)}
        Science             ${data.science}              ${getGPA(data.science)}               ${getGrade(data.science)}
        Social Science      ${data.social}              ${getGPA(data.social)}               ${getGrade(data.social)}
        Religion            ${data.religion}              ${getGPA(data.religion)}               ${getGrade(data.religion)}


    `);

})

