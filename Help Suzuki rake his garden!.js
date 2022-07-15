function rakeGarden(garden) {
  const arr=garden.split(' ')
  for (let i=0; i<arr.length; i++){
    if (arr[i]=='gravel' || arr[i]=='rock'){
      continue;
    }else {
      arr[i]='gravel'
    }
  }
  return arr.join(' ')
}

/*
P: string
R: string with everything that's not rock or gravel replaced with gravel
E: 
garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
P:
split(' ')
for loop, replacing as needed
arr.join(' ')
*/