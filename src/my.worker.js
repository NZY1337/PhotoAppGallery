
const CryptoJS = require("crypto-js");

self.addEventListener('message', (e) =>{
    const workerRes = e.data;
    postMessage(workerRes);
})

