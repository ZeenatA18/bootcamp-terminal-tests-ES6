export default function yearsAgo(year){

    const years = new Date();
    
   // console.log(years.getFullYear()-1976)
                
    return years.getFullYear()-year
  }