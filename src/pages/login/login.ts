import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpErrorResponse} from "@angular/common/http";
import {MediaProvider} from "../../providers/media/media";
import {FrontPage} from "../front/front";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    if (localStorage.getItem('localToken') !== null) {
      this.mediaProvider.getUserData().subscribe(response => {
        this.navCtrl.push(FrontPage);
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
      });
    }
  }
}
