// indexDB my ass

const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
  ];

const request = window.indexedDB.open("MyDatabasePhotoApp", 1);


// only in this place we can alter the structure of the database (create, delete objects stores);
request.onupgradeneeded = e => {
    const db = e.target.result;
    const objectStore = db.createObjectStore('accounts');
}

request.onsuccess = e => {
    console.log('succes');
    const db = request.result;
    var obStore = db.transaction('accounts', "readwrite").objectStore("accounts");
    // const req = obStore.get('myData');
    
    obStore.put('Ana are mere', 'my-data')
    
    customerData.forEach((customer, index) => {
        obStore.put(customer.name, index ) 
    })
}

request.onerror = e => {
    console.log('Error', e);
}

