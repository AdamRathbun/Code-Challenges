function blackAndWhite(arr){
    if(Array.isArray(arr)===false){
      return "It's a fake array"
    }else if (arr.includes(5)&&arr.includes(13)){
      return "It's a black array"
    }else if (!(arr.includes(5) && arr.includes(13))){
      console.log('hi')
      return "It's a white array"
    }
  }
  
  
  function blackAndWhite(arr){
    if(Array.isArray(arr)===false){
      return "It's a fake array"
    }
    return arr.includes(5)&&arr.includes(13)? "It's a black array" : "It's a white array"
  }