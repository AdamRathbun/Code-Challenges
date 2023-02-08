class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      //the Map object provides O(1) time complexity for get and set operations. It holds key-value pairs and remembers the original insertion order of the keys.
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      //delete the old key and add a new key-value pair so that it's the most recently used
      //the map.set() method is used to add key-value pairs to a Map object. It can also be used to update the value of an existing key. Each value must have a unique key so that they get mapped correctly.
      return value;
    }
  
    put(key, value) {
      if (this.cache.has(key)) this.cache.delete(key);
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
        //gets the keys with keys method, then next method returns the next object with done and value, so take the value and delete that key value pair
      }
    }
  }
  
  
  /**
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */