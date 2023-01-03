function fibonacci2(num){
    let arr = [0,1]
    for (let i=2; i<=num; i++){
        arr[i] = arr[i-1] + arr[i+2]
    }
    return arr[num]
}

function fibonacci3(num){
    if (num<2){
        return num
    }else {
        return (fibonacci3(num-1) + fibonacci3(num-2))
    }
}