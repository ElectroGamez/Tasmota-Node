# Tasmota-Node
A helpfull package for making Tasmota API calls.

## Examples


### ES6 Javascript / Typescript
```typescript
import { TasmotaInstance } from "../src/index";

// Selfcalling async function
(async () => {
    // Create instance of class.
    const bedroom = new TasmotaInstance("http://192.168.1.100/"); // Trailing slash is required.

    // Toggle power for all Modules
    const res = await bedroom.power("TOGGLE");
    console.log(res); // {POWER1: "OFF", POWER2: "OFF"}

    // Toggle power for Module 1
    const res = await bedroom.power("ON", 1);
    console.log(res.POWER1); // "OFF"
})();
```