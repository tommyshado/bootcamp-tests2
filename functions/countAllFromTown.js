const countAllFromTown = (strRegNum, locat) => {
	let splStrReg = strRegNum.split(",");
  	let counter = 0;
  
  	for (let i = 0; i < splStrReg.length; i++) {
    	const currentReg = splStrReg[i].trim();
      
      	if (currentReg.startsWith(locat)) {
        	counter++;
        }
    }
  	return counter;
}
