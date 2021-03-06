import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from '../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPage
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
  declarations: [AnalyticsPage]
})
export class AnalyticsPageModule {}
