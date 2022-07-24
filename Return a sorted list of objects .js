function sortList (sortBy, list) {

  return [...list].sort((a,b)=>b[sortBy]-a[sortBy])
}

/*
P: a list of objects
R: an array of the list sorted in descending order by the value of the property in sortBy
E: 
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
returns
[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
P:
spread operator inside brackets, then descending sort like .sort((a,b)=>b[sortBy]-a[sortBy])
*/