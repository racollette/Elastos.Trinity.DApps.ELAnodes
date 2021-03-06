import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) {
    }

    public setNodes(value: any) {
        return this.storage.set("nodes", JSON.stringify(value)).then((data) => {
            console.log('Stored nodes', data)
        });
    }

    public getNodes(): Promise<any> {
        return this.storage.get("nodes").then((data) => {
            console.log(data)
            return JSON.parse(data);
        });
    }

    public setVotes(value: any) {
        return this.storage.set("votes", JSON.stringify(value)).then((data) => {
            console.log('Stored votes', data)
        });
    }

    public getVotes(): Promise<any> {
        return this.storage.get("votes").then((data) => {
            console.log(data)
            return JSON.parse(data);
        });
    }

    public setVisit(value: boolean) {
        return this.storage.set("visited", JSON.stringify(value)).then((data) => {
            console.log('Set first visit: ', data)
        });
    }

    public getVisit(): Promise<boolean> {
        return this.storage.get("visited").then((data) => {
            console.log('Visited? ', data)
            return JSON.parse(data);
        });
    }

    public setWallets(value: any) {
        console.log(value)
        return this.storage.set("wallets", JSON.stringify(value)).then((data) => {
            console.log('Stored wallets', data)
        });
    }

    public getWallets(): Promise<any> {
        return this.storage.get("wallets").then((data) => {
            //console.log(data)
            return JSON.parse(data);
        });
    }

    public setNotificationOptions(value: any) {
        return this.storage.set("notification", JSON.stringify(value)).then((data) => {
            //console.log('Stored notification options', data)
        });
    }

    public getNotificationOptions(): Promise<any> {
        return this.storage.get("notification").then((data) => {
            console.log(data)
            return JSON.parse(data);
        });
    }

}
