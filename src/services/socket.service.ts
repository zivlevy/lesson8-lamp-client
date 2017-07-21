import {Injectable} from '@angular/core';

import * as io from 'socket.io-client';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SocketService {
    private socket: SocketIOClient.Socket;
    lampInput$: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor() {
         this.socket = io('http://130.211.153.28:3000');
        // this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            console.log('We are connected');
        });
        this.socket.on('lamp', (data) => {
            console.log(data);
            this.lampInput$.next(data);
        });
    }

    setLampData(value) {
        this.socket.emit('lamp', value);
    }

    getLampData$() {
        return this.lampInput$.asObservable();
    }

}
