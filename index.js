var recipes = {bananas:200}

function updateObjectWithKeyAndValue(obj,key,value){
 
  return Object.assign({},obj,{[key]:value})
}