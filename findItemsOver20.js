export default function findItemsOver20(itemList){
    var item = itemList
    var items = []
  
    for(var i=0;i<item.length;i++){
      var current = item[i]
  
      if(current.qty > 20){
      items.push(current)
      }
    }
   return items
  }
  
  