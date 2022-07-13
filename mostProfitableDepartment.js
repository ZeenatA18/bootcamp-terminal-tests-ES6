export default function mostProfitableDepartment(salesData){
    var salesdataMap = {}
   
   for(var i=0; i<salesData.length; i++){
    var data = salesData[i];
      salesdataMap[data.department] = 0;
   }
   
   //console.log(salesdataMap);
     
   for(var i=0; i<salesData.length; i++){
    var data = salesData[i];
     
     var currentDepartmentTotal = salesdataMap[data.department];
      currentDepartmentTotal += data.sales;
       salesdataMap[data.department] = currentDepartmentTotal;
   }
     //console.log(salesdataMap);
     
     var currentMaxSales = 0;
     var currentDepartment = "";
    for(var salesData in salesdataMap){
      //console.log(salesData);
      //console.log(salesdataMap[salesData]);
      
     var currentDataDepartmentSales = salesdataMap[salesData];
      if(currentDataDepartmentSales > currentMaxSales){
      currentMaxSales = currentDataDepartmentSales
       currentDepartment = salesData;
      }
    }
     return currentDepartment;
   }