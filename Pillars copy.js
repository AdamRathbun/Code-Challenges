function pillars(num_pill, dist, width) {
    if (num_pill===1){
      return dist=0
    }else if (num_pill===2){
      return dist*100
    }else if (num_pill>=3){
      let extra_pill=num_pill-2
      dist=dist*100
      let extra=extra_pill*width + extra_pill*dist + dist
      return extra
    }
  }