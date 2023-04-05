// Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. 
// Registration numbers for Bellville starts with CY.

const isFromBellville = vehicle => {
    let registration = vehicle.startsWith('CY');
    return registration;
}

console.log(isFromBellville('CY 123'));
console.log(isFromBellville('CJ 123'));