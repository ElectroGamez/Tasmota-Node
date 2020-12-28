import axios, { AxiosResponse } from "axios";

export class TasmotaInstance {
    private baseURL: string;

    /**
     * Create a new Tasmota Instance
     * @param url URL to tasmota device, example: "http://192.168.1.100/" (In that format, with trailing slash)
     * @param username Optional username if required by tasmota device.
     * @param password Optional password if required by tasmota device, only used when an username is given.
     */
    constructor(url: string, username?: string, password?: string) {
        this.baseURL = username && password ? `${url}cm?user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}` : `${url}cm`;
    }

    private async sendCmd(cmd: string): Promise<AxiosResponse | null> {
        const axiosResponse = await axios.get(`${this.baseURL}?cmnd=${encodeURIComponent(cmd)}`).catch((error) => {
            console.error(error);
            return null;
        });
        return axiosResponse;
    }

    async power(status?: PowerState, number?: number): Promise<PowerResponse> {
        let axiosResponse;
        if (number && status) axiosResponse = (await this.sendCmd(`Power${number} ${status}`));
        else if (status) axiosResponse = (await this.sendCmd(`Power0 ${status}`));
        else axiosResponse = (await this.sendCmd("Power0"));
        return <PowerResponse> axiosResponse?.data;
    }
}

export type PowerState = "ON" | "OFF" | "TOGGLE";
export interface PowerResponse {
    [key: string]: "ON" | "OFF"
}