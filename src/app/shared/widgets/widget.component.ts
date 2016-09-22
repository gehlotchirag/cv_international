export abstract class Widget {

  constructor(private data: Object){}

  set widgetData(newData: Object){
    this.data = newData;
    // if(!isEmpty(newData, true)){
    //   this.data = newData;
    // }
    // else {
    //   throw new TypeError("need data to initialize component");
    // }
  }
}
