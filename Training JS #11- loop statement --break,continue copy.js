function grabDoll(dolls){
    var bag=[];
    for (let i=0; i<dolls.length; i++){
      if (bag.length===3){
        break
      } else if (dolls[i]=== 'Hello Kitty' || dolls[i]==='Barbie doll'){
        bag.push(dolls[i])
      } else {
        continue
      }
    }
    console.log(bag)
    return bag;
  }