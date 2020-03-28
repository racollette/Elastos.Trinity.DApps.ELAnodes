import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageLoader } from 'ionic-image-loader';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { ComponentsModule } from './components/components.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoins, faHandHoldingUsd, faQuestionCircle, faNetworkWired, faChartBar, faChartLine, faChartArea, faCog } from '@fortawesome/free-solid-svg-icons';

import { RewardsChartComponent } from './components/rewards-chart/rewards-chart.component';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Sentry from "@sentry/browser";

//import 'chartjs-plugin-zoom';

Sentry.init({
  dsn: "https://acb9a7ff020f4a4aacdb8a5e9e8214e4@sentry.io/1875730"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error) {
    console.error("Globally catched exception:", error);

    console.log(document.URL);
    // Only send reports to sentry if we are not debugging.
    if (document.URL.includes('localhost')) { // Prod builds or --nodebug CLI builds use "http://localhost"
      Sentry.captureException(error.originalError || error);
    }
  }
}

@NgModule({
  declarations: [
    MyApp, RewardsChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartsModule,
    AppRoutingModule,
    ComponentsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
  ],
  bootstrap: [MyApp],
  entryComponents: [
    RewardsChartComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    Platform,
    WebView,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: SentryErrorHandler}
  ]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
    library.addIcons(faCoins, faHandHoldingUsd, faQuestionCircle, faNetworkWired, faChartBar, faChartLine, faChartArea, faCog);
  }  
}