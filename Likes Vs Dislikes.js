// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  console.log(buttons)
  let button=''
  if (!buttons.length){
    return 'Nothing'  
  }
  for (let i=0; i<buttons.length; i++){
    if (buttons[i]!==button){
      button=buttons[i]
    }else if (button===buttons[i-2] && button===buttons[i-1]) {
      button= buttons[i-2]
    }else if (button===buttons[i-1]){
      button='Nothing'
    }
  }
  return button
}

/*
P: array of strings
R: string corresponding to the action state, else nothing
E: likeOrDislike([Like,Dislike,Dislike]), Nothing 
P: bunch of conditionals
*/