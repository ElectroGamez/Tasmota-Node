"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasmotaInstance = void 0;
const axios_1 = __importDefault(require("axios"));
class TasmotaInstance {
    /**
     * Create a new Tasmota Instance
     * @param url URL to tasmota device, example: "http://192.168.1.100/" (In that format, with trailing slash)
     * @param username Optional username if required by tasmota device.
     * @param password Optional password if required by tasmota device, only used when an username is given.
     */
    constructor(url, username, password) {
        this.baseURL = username && password ? `${url}cm?user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}` : `${url}cm`;
    }
    async sendCmd(cmd) {
        const axiosResponse = await axios_1.default.get(`${this.baseURL}?cmnd=${encodeURIComponent(cmd)}`).catch((error) => {
            console.error(error);
            return null;
        });
        return axiosResponse;
    }
    async power(status, number) {
        let axiosResponse;
        if (number && status)
            axiosResponse = (await this.sendCmd(`Power${number} ${status}`));
        else if (status)
            axiosResponse = (await this.sendCmd(`Power0 ${status}`));
        else
            axiosResponse = (await this.sendCmd("Power0"));
        return axiosResponse?.data;
    }
}
exports.TasmotaInstance = TasmotaInstance;
