function validateWord(s) {
    s = s.toLowerCase()
    let arr=[]
    let ch, i, len, count
    for (i=0, len=s.length; i<len; i++) {
      console.log(`index is ${i}`)
      ch=s.charAt(i)
      console.log(`character is ${ch}`)
      count=arr[ch]
      console.log(count)
      arr[ch]=count ? count + 1 : 1  //have to use arr[ch] b.c have to link the count to each letter
      console.log(arr)
    } return Math.max(...Object.values(arr)) === Math.min(...Object.values(arr))
  }