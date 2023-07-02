// convert from roman numerals to number and vice versa

function romanNumeral(n){
    if (typeof n !=='number' && typeof n !=='string'){
        throw new Error('Please enter a number or a Roman numeral string.')
    }

    // roman numeral string to number
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
            }else if (string1[i]==='c'){
                value+=100
            }else if (string1[i]==='x' && string1[i+1]==='c'){
                value+=90
                i++
            }else if (string1[i]==='l'){
                value+=50
            }else if (string1[i]==='x' && string1[i+1]==='l'){
                value+=40
                i++
            }else if (string1[i]==='x'){
                value+=10
            }else if (string1[i]==='i' && string1[i+1]==='x'){
                value+=9
                i++
            }else if (string1[i]==='v'){
                value+=5
            }else if (string1[i]==='i' && string1[i+1]==='v'){
                value+=4
                i++
            }else if (string1[i]==='i'){
                value+=1
            }
        }
        return value
    }

    // number to roman numeral string
    if (typeof n === 'number'){
        let value = ''
        let num=n
        while (num>0){
            if (num>=1000){
                value=value.concat('m')
                num-=1000
            }else if (num>=900){
                value=value.concat('cm')
                num-=900
            }else if (num>=500){
                value=value.concat('d')
                num-=500
            }else if (num>=400){
                value=value.concat('cd')
                num-=400
            }else if (num>=100){
                value=value.concat('c')
                num-=100
            }else if (num>=90){
                value=value.concat('xc')
                num-=90
            }else if (num>=50){
                value=value.concat('l')
                num-=50
            }else if (num>=40){
                value=value.concat('xl')
                num-=40
            }else if (num>=10){
                value=value.concat('x')
                num-=10
            }else if (num===9){
                value=value.concat('ix')
                num-=9
            }else if (num===5){
                value=value.concat('v')
                num-=5
            }else if (num===4){
                value=value.concat('iv')
                num-=4
            }else if (num>0){
                value=value.concat('i')
                num-=1
            }
        }
        return value.toUpperCase()
    }

}