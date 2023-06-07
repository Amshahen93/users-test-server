import { networkInterfaces, NetworkInterfaceInfo} from 'os';

export class IP4 {
    public static get ipObject() {
        let ipObj: NetworkInterfaceInfo;
        const net = networkInterfaces()
        Object.keys(net).find((key) => {
            ipObj = net[key].find((ipObj) => {
              return ipObj.family === 'IPv4' && !ipObj.internal
            });
            return !!ipObj
        });
        return ipObj;
    }
    public static get ip4(): string {
        return  this.ipObject.address
    }
}