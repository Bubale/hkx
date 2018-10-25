import {Component, ViewChild} from '@angular/core';
import {Config, Slides, NavController} from 'ionic-angular';
import {ShowListPage} from '../show-list/show-list';
import {ClientService} from '../../providers/client-service-rest';
import {SERVER_URL} from '../../providers/config';



@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    clients: Array<any>;
    map;
    markersGroup;
    serverUrl = SERVER_URL;
    
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public service: ClientService, public config: Config) {
        this.findAll();
    }

    ngAfterViewInit() {
      this.slides.pager = true;
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.clients = data;
            })
            .catch(error => alert(error));
    }

    openShowList() {
        this.navCtrl.push(ShowListPage);
    }
}