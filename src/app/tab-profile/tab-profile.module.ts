import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfilePageRoutingModule } from './tab-profile-routing.module';

import { TabProfilePage } from './tab-profile.page';
import {ProfilepictureComponent} from './profilepicture/profilepicture.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfilePageRoutingModule
  ],
  entryComponents: [ProfilepictureComponent],
  declarations: [TabProfilePage, ProfilepictureComponent]
})
export class TabProfilePageModule {}
