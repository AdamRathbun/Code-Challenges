// convert from roman numerals to number and vice versa

function romanNumeral(n){
    if (typeof n !=='number' && typeof n !=='string'){
        throw new Error('invalid entry')
    }

    // roman numerals to number
    if (typeof n==='string'){
        let string1 = n.toLowerCase().split('')
        console.log(string1)

        let value = 0
        for (let i=0; i<string1.length; i++){
            if (string1[i]==='m'){
                value+=1000
            }else if (string1[i]==='c' && string1[i+1]==='m'){
                value+=900
                i++
                // increment twice in case of 9 or 4
            }else if (string1[i]==='d'){
                value+=500
            }else if (string1[i]==='c' && string1[i+1]==='d'){
                value+=400
                i++
            }else if (string[i]==='c'){
                value+=100
            }else if (string[i]==='x' && string[i+1]==='c'){
                value+=90
                i++
            }else if (string[i]==='l'){
                value+=50
            }else if (string[i]==='x' && string[i+1]==='l'){
                value+=40
                i++
            }else if (string[i]==='x'){
                value+=10
            }else if (string[i]==='i' && string[i+1]==='x'){
                value+=9
                i++
            }else if (string[i]==='v'){
                value+=5
            }else if (string[i]==='i' && string[i+1]==='v'){
                value+=4
                i++
            }else if (string[i]==='i'){
                value+=1
            }
        }
        return value
    }


}