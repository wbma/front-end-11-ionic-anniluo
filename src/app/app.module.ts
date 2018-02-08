import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, Thumbnail} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaProvider } from '../providers/media/media';
import { FrontPage } from "../pages/front/front";
import { LoginPage } from "../pages/login/login";
import { LogoutPage } from "../pages/logout/logout";
import { RegisterPage } from "../pages/register/register";
import { UploadPage } from "../pages/upload/upload";
import { HttpClientModule } from "@angular/common/http";
import { ThumbnailPipe } from "../pipes/thumbnail/thumbnail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FrontPage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    UploadPage,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FrontPage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    UploadPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider
  ]
})
export class AppModule {}
