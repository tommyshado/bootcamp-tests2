let salesData2 = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
];

function mostProfitableDepartment(salesData) {
    let departmentDic = {}
    
    for (let i = 0; i < salesData.length; i++) {
        let currentObj = salesData[i];
      let saleDepartment = currentObj.department;
      
      if (departmentDic[saleDepartment] === undefined) {
          departmentDic[saleDepartment] = 0;
      } else {
        departmentDic[saleDepartment] += currentObj.sales;
      }
    }
    
    let maxSale = 0;
    let currentDepart = "";
    
    for (let key in departmentDic) {
      
        if (departmentDic[key] > maxSale) {
        maxSale = departmentDic[key];
        currentDepart = key;  
      }
    }

    return currentDepart;
}

console.log(mostProfitableDepartment(''));