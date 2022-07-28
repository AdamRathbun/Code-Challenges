const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();


/*
function convertHashToArray(hash){
  let arr=[]
  for (let key in hash){
    if (typeof hash[key]==='string'){
      arr.push([`${key}`, `${hash[key]}`])
    }
    else{
      arr.push([`${key}`, hash[key]])
    }
  }
  return arr.sort((a,b)=>a[0]>b[0])
}
*/