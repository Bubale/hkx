import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
    selector: 'page-logo',
    templateUrl: 'logo.html'
})
export class LogoPage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController) {
    }

    ngAfterViewInit() {
    }

    logo() {
        this.navCtrl.push(LoginPage);
    }
}