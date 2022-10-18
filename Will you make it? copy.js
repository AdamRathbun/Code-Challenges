const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let distance=Number(mpg) * Number(fuelLeft)
    if (distance>=Number(distanceToPump)){
      return true
    } else {
      return false
    }
  };