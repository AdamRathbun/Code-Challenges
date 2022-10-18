function inviteMoreWomen(L) {
  return L.reduce((a,b)=>a+b)>0 ? true : false
}

/*
check for invite list based on men (1) and women (-1) to make sure enough women to be at least half
reduce and if number is greater than 0, that means more than half are men, then return true
*/