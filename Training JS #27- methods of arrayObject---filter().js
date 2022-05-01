function countGrade(scores){
    let grades={
      S:0,
      A:0,
      B:0,
      C:0,
      D:0,
      X:0
    }
    scores.forEach(x=>{
      if (x===100){
        grades['S']+=1
      }else if (x<100 && x>=90){
        grades['A']+=1
      }else if (x<90 && x>=80){
        grades['B']+=1
      }else if (x<80 && x>=60){
        grades['C']+=1
      }else if (x<60 && x>=0){
        grades['D']+=1
      }else {
        grades['X']+=1
      }
    })
    return (grades)
  }