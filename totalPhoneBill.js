export default function totalPhoneBill(totalPhone){
    var bill = totalPhone.split(',');
      // console.log(bill);
     var counter = 0;
      
     for(var i=0;i<bill.length;i++){
        var phoneBill = bill[i].trim();
            // console.log(phoneBill)
      
      if(phoneBill === 'sms'){
      counter += 0.65;
        }
       else if(phoneBill === 'call'){
       counter += 2.75;
       }
     }
      // console.log(counter)
      return 'R'+counter.toFixed(2);
    }