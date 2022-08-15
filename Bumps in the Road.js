function bump(x){
  let count=0
  let road=x.split('')
  for (let i=0; i<road.length; i++){
    if (road[i]==='n'){
      count+=1
    }else {continue}
  }
  return count<=15?'Woohoo!':'Car Dead'
}

/*
P: string of  _ (flat road) and n (bump)
R: if 15 or less bumps, then return Woohoo!, else Car Dead
E: bump("______n___n_"), "Woohoo!"
P:
split('')
for loop, if n then add to count
if count<=15, then I returned home
*/