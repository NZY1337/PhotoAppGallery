
const CryptoJS = require("crypto-js");

self.addEventListener('message', (e) =>{
  const resWorker = e.data;
  console.log(resWorker);
})

