function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0
  let days = 0
  while (height<desiredHeight){
    height+=upSpeed
    days++
    if (height>=desiredHeight){
      return days
    }else {
      height-=downSpeed
    }
  }
  return days
}

/*
plant grows by first argument length by day, then second argument length by night, and wants to
grow into third argument length. plant starts at 0
*/