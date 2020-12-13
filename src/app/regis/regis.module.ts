import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisPageRoutingModule } from './regis-routing.module';

import { RegisPage } from './regis.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RegisPage]
})
export class RegisPageModule {}
