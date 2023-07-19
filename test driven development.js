// test driven development

function adderTester(){

    // if (adder(3,7)===10){
    //     console.log('Success')
    // }else{
    //     console.log('Failre')
    // }

    adder(3,7)===10 ? console.log('Success') : console.log('Fail')
}

function adder(x,y){
    return x+y
}