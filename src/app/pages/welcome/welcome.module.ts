import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrisanetDisplayAddressComponent } from 'src/app/app/components/brisanet-display-address/brisanet-display-address.component';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    WelcomeComponent,
    BrisanetDisplayAddressComponent
  ],
  exports: [WelcomeComponent],


})
export class WelcomeModule { }
