function changeCount( change ){
    let total=0.00
    change=change.split(' ')
    for (let i=0; i<change.length; i++) {
      if (change[i]==='dollar'){
        total+=1.00
      }
    }
    for (let i=0; i<change.length; i++) {
      if (change[i]==='quarter'){
        total+=.25
      }
    }
    for (let i=0; i<change.length; i++) {
      if (change[i]==='dime'){
        total+=.10
      }
    }
    for (let i=0; i<change.length; i++) {
      if (change[i]==='nickel'){
        total+=.05
      }
    }
    for (let i=0; i<change.length; i++) {
      if (change[i]==='penny'){
        total+=.01
      }
    }
    let final = total.toFixed(2)
    return '$' + String(final)
    console.log(total)
  }