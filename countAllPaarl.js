export default function allPaarl(regNum){
    var regNo = regNum.split(', ');
   var regNum= [];
   //console.log(regNo)
    
   for(var i=0; i<regNo.length;i++){
     var regOne = regNo[i];
    //console.log(regOne)
    if (regOne.startsWith('CJ')){
      regNum.push(regOne);
  } 
  }
   return regNum; 
  }