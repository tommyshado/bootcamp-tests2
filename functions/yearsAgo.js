// Write a function called yearsAgo that takes in a year and 
// return how many years ago that year is from the current year.

const yearsAgo = year => {
    let givenDate = new Date();
    let userYear = givenDate.getFullYear();
    let yearsDiff = userYear - year;
    return yearsDiff;
}

console.log(typeof yearsAgo('197r'));