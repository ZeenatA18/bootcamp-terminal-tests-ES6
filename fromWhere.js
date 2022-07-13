export default function fromWhere(regNo){
    switch(regNo){
      case "CY":
        return "Bellville";
      case "CJ":
        return "Paarl";
      case "CA":
        return "Cape Town";
      default:
        return "Some other place!";
    }
    }