import * as _ from 'lodash';

export function isEmpty(obj: Object, defined: boolean): boolean {
  if (defined && _.isObject(obj)) {
        return !_.any( obj, function(value, key) {
          return value !== undefined;
        });
      }
  return _.isEmpty(obj);
}
