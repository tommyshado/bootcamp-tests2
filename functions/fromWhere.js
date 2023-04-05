const fromWhere = regNum => {
	let regNumBell = regNum.startsWith("CY");
  	let regNumPaarl = regNum.startsWith("CJ");
  	let regNumCap = regNum.startsWith("CA");
  	
  	if (regNumBell) return "Bellville";
  	if (regNumPaarl) return "Paarl";
  	if (regNumCap) return "Cape Town";
  	
    if (!regNum.startsWith(regNumBell, regNumCap, regNumPaarl)) {
        return "Some other place!";
    }
}

console.log(fromWhere('CK 1243'));