function unusedDigits() {
    let args = String(Array.from(arguments))
    let missing=[]
    for (let i=0; i<=9; i++){
      if (!args.includes(i)){
        missing.push(i)
      }
    }
    return missing.join('')
  }