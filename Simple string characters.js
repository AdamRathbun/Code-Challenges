function solve(s){
    let newS=s.split('')
    let arr=[0,0,0,0]
    for (let i=0; i<newS.length; i++){
      if (newS[i].match(/[A-Z]/)){
        arr[0]++
      }else if (newS[i].match(/[a-z]/)){
        arr[1]++
      }else if (newS[i].match(/\d/)){    //  \d means any digit
        arr[2]++
      }else if (newS[i].match(/\W/)){    //  \W means any non-word character (i.e. special)
        arr[3]++
      }
    }
    console.log(arr)
    return arr
  }