var recipes = {bananas:200}

function updateObjectWithKeyAndValue(obj,key,value){
  //return updated object without changing obj in arguments
  return Object.assign({},obj,{[key]:value})
}