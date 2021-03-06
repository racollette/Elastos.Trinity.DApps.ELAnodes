import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { DonatePage } from './donate.page';


const routes: Routes = [
  {
    path: '',
    component: DonatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DonatePage]
})
export class DonatePageModule {
}