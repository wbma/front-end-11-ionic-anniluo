import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media } from "../../interfaces/media";
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  file: File;
  media: Media = {
    title: '',
    description: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() { }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  upload() {
    console.log(this.media);
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    this.mediaProvider.upload(formData).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }

}
