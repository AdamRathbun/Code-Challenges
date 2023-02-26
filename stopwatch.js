// stopwatch constructor
// start, stop, reset methods, but create the duration property using Object.defineProperty

function Stopwatch(){
    // these are local variables that you can't grab from the outside when you instantiate an object
    let running=false
    let start,end
    let duration=0

    this.start=function(){
        if (running===true){
            return 'Stopwatching already running.'
        }else{
            running=true
            start=new Date()
        }
    }

    this.stop=function(){
        if (running===false){
            return 'Stopwatching not running yet.'
        }else{
            running=false
            stop=new Date()
            duration=(stop.getTime()-start.getTime())/1000
        }
    }

    this.reset=function(){
        running=false
        start,end=null
        duration=0
    }
// adds a new property which is a getter function, for this object upon instantiation, to grab the duration
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration
        }
    })
}

let watch1 = new Stopwatch()
watch1.start()
watch1.stop()
watch1.duration



// class Stopwatch

class Stopwatch2{
    constructor(){
        this.startTime=0
        this.endTime=0
        this.duration=0
        this.running=false
    }
    start(){
        if (this.running===true){
            return 'Already running.'
        }else{
            this.running=true
            this.startTime=new Date()
        }
    }
    end(){
        if (this.running=false){
            return 'Not running yet'
        }else {
            this.running=false
            this.endTime=new Date()
            this.duration=(this.endTime.getTime()-this.startTime.getTime())/1000
        }
    }
    reset(){
        this.startTime,this.stopTime=null
        this.duration=0
        this.running=false
    }
    get myDuration(){
        return this.duration
    }
}

let watch2=new Stopwatch2()
watch2.start()
watch2.stop()
watch2.myDuration
watch2.reset()
watch2.myDuration


// one more stopwatch constructor

function Stopwatch3(){
    let duration=0
    let start,end=0
    let running=false

    this.start=function(){
        if (running===true){
            return 'Already running.'
        }else{
            running=true
            start=new Date()
        }
    }

    this.stop=function(){
        if (running===false){
            return 'Not running yet.'
        }else {
            running=false
            end=new Date()
            duration=(end.getTime()-start.getTime())/1000
        }
    }

    this.reset=function(){
        start=null
        end=null
        duration=0
        running=false
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration
        }
    })
}

let watch3= new Stopwatch3()
watch3.start()
watch3.stop()
watch3.duration()


