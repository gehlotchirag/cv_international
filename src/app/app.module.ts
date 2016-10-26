import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
  appRoutingProviders }  from './app.routing';
  import './rxjs-extensions'

  import { AppComponent } from './app.component';
  import { HomeComponent } from './home';
  import { ListingComponent } from './listing';
  import { ProductComponent } from './product';
  import { SingleRowComponent } from './shared/widgets/single-row/single-row.component';
  import { TwoColumnComponent } from './shared/widgets/two-column/two-column.component';
  import { ProductAttributePipe } from './product/product-attribute.pipe';
  import { CategoryFilterPipe } from './listing/category-filter.pipe';
  import { HttpClientService } from './shared/services/http-client.service';
  import { KeysPipe } from './product/keys.pipe';
  import { ProductService, ProductDetailResolve } from './product';


  @NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    ],
    declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    ProductComponent,
    SingleRowComponent,
    TwoColumnComponent,
    ProductAttributePipe,
    CategoryFilterPipe,
    KeysPipe
    ],
    entryComponents: [SingleRowComponent, TwoColumnComponent],
    providers: [appRoutingProviders, HttpClientService, ProductDetailResolve, ProductService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
