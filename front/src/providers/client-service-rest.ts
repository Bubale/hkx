import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let clientsURL = SERVER_URL + 'clients/';

@Injectable()
export class ClientService {
    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(clientsURL)
            .map(res => res.json())
            .toPromise();
    }
}