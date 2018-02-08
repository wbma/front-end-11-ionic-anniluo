import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginPage} from "../login/login";

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-front',
  templateUrl: 'front.html',
})
export class FrontPage {

  mediaArray: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider ) {
  }

  ionViewDidLoad() {
    this.mediaProvider.getUserData().subscribe(response => {
      console.log('Welcome ' + response['username']);
      this.displayImgs();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.navCtrl.push(LoginPage);
    });
  }

  displayImgs() {
    this.mediaProvider.getNewFiles().subscribe(response => {
      console.log(response);
      this.mediaArray = response;
      console.log(this.mediaArray);
    });
  }
}
