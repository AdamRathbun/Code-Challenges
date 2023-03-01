// LRU prac

// version 1
class LRU{
    constructor(capacity){
        this.capacity=capacity
        this.cache=new Map()
    }

    get(key){
        if (!this.cache.has(key)) return -1
        const value = this.cache[key]
        // for objects of Map class, must use object.delete(key) instead of delete object[key]
        this.cache.delete(key)
        this.cache.set(key, value)
    }

    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
            this.cache.set(key, value)
        }else if(this.cache.size>this.capacity){
            this.cache.delete(this.cache.keys().next().value)
        }
    }
}
