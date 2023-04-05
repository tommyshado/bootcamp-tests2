function countAllPaarl(strRegNum) {
	let splStr = strRegNum.split(", ");
  	let counter = 0;
  
  	for (let i = 0; i < splStr.length; i++) {
    	const currentReg = splStr[i];
      
      	if (currentReg.startsWith("CJ")) {
        	counter++;
        }
    }
  	return counter;
}

console.log(countAllPaarl(''))