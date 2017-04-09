var forLoop = function(array){
  for (i = 0; i < 25; i++){
    if (i === 1){
    array.push(`"I am ${i} strange loop."`)
    }
    else {
      array.push(`"I am ${i} strange loops."`)
    }
  }
  return array
}
var whileLoop = function(n){
  while(n > 0){
    console.log(--n )
  }
  return 'done'
}

var maybeTrue = function() {
  return Math.random() >= 0.5
}
var doWhileLoop = function(array){
  do{
  array.pop()
  } while(array.length > 0 && maybeTrue())
  return array
}
