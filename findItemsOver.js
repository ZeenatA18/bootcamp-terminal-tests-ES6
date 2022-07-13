export default function findItemsOver(itemList, threshold){
    var results = []
    
      for(var i=0;i<itemList.length;i++){
       var object = itemList[i]
         if(object.qty > threshold){
         results.push(object)
         } 
      }
    return results
  }