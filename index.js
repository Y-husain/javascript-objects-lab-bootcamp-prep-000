var recipes = {bananas:200}

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  //change obj argument by adding new key value pair
  obj[key] = value
  return obj
}