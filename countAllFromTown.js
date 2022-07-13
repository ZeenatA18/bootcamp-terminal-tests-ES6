export default function allFromTown(registration,location){ 
    var regNo = registration.split(',');
       var town = [];
   //console.log(regNo)
    
  for(var i=0;i<regNo.length;i++){
       var regOne = regNo[i].trim();
    //console.log(regOne)
    
   if (regOne.startsWith(location)){
     town.push(regOne);
  } 
  }
   return town; 
  }