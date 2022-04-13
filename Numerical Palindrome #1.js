function palindrome(num) { 
    if (Number.isInteger(num)!==true || num<0){
      return 'Not valid'
    }
    num=String(num)
    let pali=num.split('').reverse().join('')
    if (num===pali){
      return true
    } else {
      return false
    }
  } 