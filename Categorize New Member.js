function openOrSenior(data){
    return data.map(([x,y])=>x>=55 && y >7 ? 'Senior' : 'Open')
  }