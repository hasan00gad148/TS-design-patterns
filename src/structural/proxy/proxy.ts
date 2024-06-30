import {Internet, InternetConnection} from './internet'

export default class Proxy implements Internet{
    private internet = new InternetConnection() 
    constructor(public bannedSites:string[] ) {}

    connectionto(host: string): void {
        let flag = false
        this.bannedSites.forEach(site => {if(site === host) flag = true});
        if (flag){
            console.log("Proxy: this site is banned "+host );
            return
        }
            
        this.internet.connectionto(host);
    }
}
