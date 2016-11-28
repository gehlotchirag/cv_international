export function concatAll(arr: any[]): any {
  let concatArr = [];
  if(Array.isArray(arr)){
    arr.forEach((item) => {
      if(Array.isArray(item)){
        item.forEach((subItem) => concatArr.push(subItem));
      }else if(!(item === null || item === undefined)){
        concatArr.push(item);
      }
    });
  }
  return concatArr;
}
