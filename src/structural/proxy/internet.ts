interface Internet{
    connectionto(host: string, port?:number):void
}

class InternetConnection implements Internet{
    connectionto(host: string): void {
        console.log(`InternetConnection: connect to ${host}`);
    }
}

export {Internet, InternetConnection}