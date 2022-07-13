class Quark{
  constructor(color, flavor, baryon_number){
    this.color=color
    this.flavor=flavor
    this.baryon_number=1/3
  }
  interact(obj2){
    let obj2C=obj2.color
    let obj1C=this.color
    this.color=obj2C
    obj2.color=obj1C
  }
}

//should store the original colors in separate variables, then this.color=variable1 obj.color=variable2