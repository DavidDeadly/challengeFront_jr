import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapTrash, bootstrapBagHeart } from '@ng-icons/bootstrap-icons';
import { SweetAlert2Module, SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { CartComponent } from './component/cart/cart.component';
import { FinishBuyComponent } from './component/finish-buy/finish-buy.component';
import { BuysComponent } from './component/buys/buys.component';
import { BuyComponent } from './component/buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    ProductComponent,
    CreateProductComponent,
    CartComponent,
    FinishBuyComponent,
    BuysComponent,
    BuyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ bootstrapTrash, bootstrapBagHeart }),
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
