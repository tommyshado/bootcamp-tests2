const findItemsOver = (itemsLst, itemsAvailable) => {
	let results = [];
  
  	for (let i = 0; i < itemsLst.length; i++) {
    	const currentObj = itemsLst[i];
      
      	if (currentObj.qty > itemsAvailable) {
        	results.push(currentObj);
        }
    }
  	return results;
}