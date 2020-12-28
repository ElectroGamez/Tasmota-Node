import { TasmotaInstance } from "../index";

// Selfcalling async function
(async () => {
    // Create instance of class.
    const bedroom = new TasmotaInstance("http://192.168.1.100/"); // Trailing slash is required.

    // Toggle power for all Modules
    const res1 = await bedroom.power("TOGGLE");
    console.log(res1); // {POWER1: "OFF", POWER2: "OFF"}

    // Toggle power for Module 1
    const res2 = await bedroom.power("ON", 1);
    console.log(res2.POWER1); // "OFF"
})();