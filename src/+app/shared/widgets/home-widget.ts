import WidgetDataItem from '../interfaces/widget-data-item';
import { Response } from '@angular/http';

import { HttpClientService } from '../services/http-client.service';


abstract class HomeWidget {
  public header: string;
  public dataItems: WidgetDataItem[];
  private dataURL: string;

  constructor(public httpClient: HttpClientService) {};

  public getAndInitData(){
    let dataStream = this.httpClient.get(this.dataURL).map( (res: Response) => {
      return res.json()
    }).publish();

    dataStream.pluck('d', 'title').subscribe(
      (data: string) => {
        this.header = data;
      },
      (error) => {console.error(error)},
      () => {}
    );

    dataStream.pluck('d', 'data').subscribe(
      (data: WidgetDataItem[]) => {
        this.dataItems = data;
      },
      (error) => {console.error(error)},
      () => {}
    )
    dataStream.connect();
  }

  public initData(dataItems: WidgetDataItem[], title: string){
    this.dataItems = dataItems;
    this.header = title;
  }

}

export default HomeWidget
