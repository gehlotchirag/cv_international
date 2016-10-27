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

export * from './concat-all';

export * from './object-keys.pipe';
