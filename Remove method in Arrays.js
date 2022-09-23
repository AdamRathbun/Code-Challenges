Array.prototype.remove = function(index) {
 if (typeof index === 'number' && index>=0){
    this.splice(index,1)
}
  return this
};

/*
make the remove method for array object, given an index for removal
*/