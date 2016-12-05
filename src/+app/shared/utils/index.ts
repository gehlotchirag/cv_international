export function isDefined(value) {return typeof value !== 'undefined';};

export function isEmpty(obj) {
  if(obj === undefined || obj === null ){
    return true;
  }
  for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function getRouterLink(value: string): any {
  if(!value) return {
    'rl': [''],
    'qp': {}
  }
  if(typeof value == 'string'){
    let tempArr = [];
    let jsonObj = {};
    let strParams = value.split('/');
    for(let entry of strParams){
        if(entry.indexOf('?') == -1){
          tempArr.push(entry)
        }
        else {
          let urlAndParams = entry.split('?');
          tempArr.push(urlAndParams[0]);
          if(urlAndParams[1]){
              let keyValArr = urlAndParams[1].split("=");
              if(keyValArr.length == 2){
                jsonObj[keyValArr[0]] = keyValArr[1];
              }
          }

          // jsonObj = JSON.parse(urlAndParams[1]);
        }
    }
    return {
      'rl': tempArr,
      'qp': jsonObj
    }
  }
  else{
    return {
      'rl': [''],
      'qp': {}
    }
  }
}

// export * from './concat-all';

export * from './object-keys.pipe';



