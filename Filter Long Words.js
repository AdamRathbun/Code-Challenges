function filterLongWords(sentence, n) {
    let sentenceS=sentence.split(' ')
    return sentenceS.filter(x=>x.length>n)
  }