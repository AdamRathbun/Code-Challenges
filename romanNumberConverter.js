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




// practice

function romanNum(num){
    if (typeof num !=='string' && typeof num !=='number'){
        throw new Error('Enter a valid entry.')
    }

    // convert Roman numerals to number
    if (typeof num ==='string'){
        let result=0
        num=num.toLowerCase()

        for (let i=0; i<num.length; i++){
            if (num[i]==='m'){
                result+=1000
            }else if (num[i]==='c' && num[i+1]==='m'){
                result+=900
                i++
            }else if (num[i]==='d'){
                result+=500
            }else if (num[i]==='c' && num[i+1]==='d'){
                result+=400
                i++
            }else if (num[i]==='c'){
                result+=100
            }else if (num[i]==='x' && num[i+1]==='c'){
                result+=90
                i++
            }else if (num[i]==='l'){
                result+=50
            }else if (num[i]==='x' && num[i+1]==='l'){
                result+=40
                i++
            }else if (num[i]==='x'){
                result+=10
            }else if (num[i]==='i' && num[i+1]==='x'){
                result+=9
                i++
            }else if (num[i]==='v'){
                result+=5
            }else if (num[i]==='i' && num[i+1]==='v'){
                result+=4
                i++
            }else if (num[i]==='i'){
                result++
            }
        }
        return result
    }

    // number to Roman numerals
    if (typeof num==='number'){
        let result=''

        while (num>0){
            if (num>=1000){
                result=result.concat('m')
                num-=1000
            }else if (num>=900){
                result=result.concat('cm')
                num-=900
            }else if (num>=500){
                result=result.concat('d')
                num-=500
            }else if (num>=400){
                result=result.concat('cd')
                num-=400
            }else if (num>=100){
                result=result.concat('c')
                num-=100
            }else if (num>=90){
                result=result.concat('xc')
                num-=90
            }else if (num>=50){
                result=result.concat('l')
                num-=50
            }else if (num>=40){
                result=result.concat('xl')
                num-=40
            }else if (num>=10){
                result=result.concat('x')
                num-=10
            }else if (num>=9){
                result=result.concat('ix')
                num-=9
            }else if (num>=5){
                result=result.concat('v')
                num-=5
            }else if (num>=4){
                result=result.concat('iv')
                num-=4
            }else if (num>=1){
                result=result.concat('i')
                num--
            }
        }

        return result.toUpperCase()
    }

}