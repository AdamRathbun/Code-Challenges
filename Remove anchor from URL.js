function removeUrlAnchor(url){
  let arr = url.split('')
  let cut = arr.indexOf('#')
  console.log(url, cut)
  return cut>0 ? (url.slice(0, cut)) : url
}

/*
remove # from url
*/