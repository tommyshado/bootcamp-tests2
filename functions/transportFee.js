// using ternary operator for multiple conditions
const transportFee = shift => shift.toLowerCase() === 'morning' ? 'R20' : shift.toLowerCase() === 'afternoon' ? 'R10' : 'free';

console.log(transportFee("MORNING"));