const findItemsOver20 = lstItems => {
    const results = [];

    for (let i = 0; i < lstItems.length; i++) {
      const currentObjName = lstItems[i];
    
        if (currentObjName.qty > 20) {
            results.push(currentObjName);
      }
    }
    return results;
}