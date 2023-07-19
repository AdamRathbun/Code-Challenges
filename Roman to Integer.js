/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let value = 0
    const arr = s.split('')
    for (let i =0; i<arr.length; i++){
        if (arr[i]==='M'){
            value+=1000
        }else if(arr[i]==='C' && arr[i+1]==='M'){
            value+=900
            i++
        }else if(arr[i]==='C' && arr[i+1]==='D'){
            value+=400
            i++
        }else if(arr[i]==='D'){
            value+=500
        }else if(arr[i]==='X' && arr[i+1]==='C'){
            value+=90
            i++
        }else if(arr[i]==='X' && arr[i+1]==='L'){
            value+=40
            i++
        }else if(arr[i]==='C'){
            value+=100
        }else if(arr[i]==='L'){
            value+=50
        }else if(arr[i]==='I' && arr[i+1]==='X'){
            value+=9
            i++
        }else if(arr[i]==='I' && arr[i+1]==='V'){
            value+=4
            i++
        }else if(arr[i]==='X'){
            value+=10
        }else if(arr[i]==='V'){
            value+=5
        }else if(arr[i]==='I'){
            value+=1
        }
    }
    console.log(value)
    return value
};

// return value based on roman numeral string in parameter


// const intToRoman = require("./kata")

// let testIntToRoman = function(i, r) {
//     test(`${i} -> ${r}`, () => {
//         expect(intToRoman(i)).toBe(r)
//     })
// }

// describe("convert integers to roman numerals", () => {
//         testIntToRoman(1, "I")
//         testIntToRoman(2, "II")
//         testIntToRoman(5, "V")
//         testIntToRoman(3277, "MMMCCLXXVII")
// })
