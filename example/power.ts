import { TasmotaInstance } from "../src/index";

(async () => {
    const bedroom = new TasmotaInstance("http://192.168.1.100/");
    const res = await bedroom.power("TOGGLE");
    console.log(res);
})();

