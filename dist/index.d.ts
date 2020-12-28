export declare class TasmotaInstance {
    private baseURL;
    /**
     * Create a new Tasmota Instance
     * @param url URL to tasmota device, example: "http://192.168.1.100/" (In that format, with trailing slash)
     * @param username Optional username if required by tasmota device.
     * @param password Optional password if required by tasmota device, only used when an username is given.
     */
    constructor(url: string, username?: string, password?: string);
    private sendCmd;
    power(status?: PowerState, number?: number): Promise<PowerResponse>;
}
export declare type PowerState = "ON" | "OFF" | "TOGGLE";
export interface PowerResponse {
    [key: string]: "ON" | "OFF";
}
//# sourceMappingURL=index.d.ts.map