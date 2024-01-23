function isValidWalk(walk) {

    if(walk.length !== 10){
      return false;
    }
    let object = {};
    for(let i =0; i< walk.length; i++){
      if(object[walk[i]]){
        object[walk[i]]++
      } else {
   object[walk[i]] = 1;
        }
  }
    return object.n === object.s && object['w'] === object['e']
  }