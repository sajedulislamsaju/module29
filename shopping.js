function updateFild(isIncrese) {
    const caseNumberFild = document.getElementById('case-number-fild');
    const caseNumberString = caseNumberFild.value;
    const previousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;
    if (isIncrese === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
       newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFild.value = newCaseNumber;

    return newCaseNumber;

}



document.getElementById('btn-case-plus').addEventListener('click', function () {
    updateFild(true);
    
});


document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateFild(false);
});


// *******************************************************
            // this is the first system in js 
// *******************************************************

// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseNumberFild = document.getElementById('case-number-fild');
//     const caseNumberString = caseNumberFild.value;
//     const previousCaseNumber = parseFloat(caseNumberString);

//     let newCaseNumber = previousCaseNumber + 1;
    
//     caseNumberFild.value = newCaseNumber;
// });

// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const caseNumberFild = document.getElementById('case-number-fild');
//     const caseNumberString = caseNumberFild.value;
//     const previousCaseNumber = parseFloat(caseNumberString);

//     let newCaseNumber = previousCaseNumber - 1;
    
//     caseNumberFild.value = newCaseNumber;
// });