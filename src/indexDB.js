// indexDB my ass

const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
  ];

const dbDetails = {
    name: 'MyDatabasePhotoApp',
    version: 1
}

function createDB() {
    return new Promise((resolve, reject) => {
        // creating db
        const request = window.indexedDB.open(dbDetails.name, dbDetails.version);
        
        // only in this place we can alter the structure of the database (create, delete objects stores);
        request.onupgradeneeded = e => {
            const db = e.target.result;
            const objectStore = db.createObjectStore('accounts');
        }

        request.onsuccess = e => {
            // console.log('succes');
            
            const db = request.result;
            const obStore = db.transaction('accounts', 'readwrite').objectStore('accounts');

            // put data into db
            obStore.put('Ana are mere', '#1' );
            resolve('Successfully resolved my DB');
        }

        request.onerror = e => {
            reject(request.e);
        }
    });
}

// check if the DB is successfully created or not :D:D 
async function testDb() {
    try {
        const checkDb = await createDB();
        console.log(checkDb);
    } catch(err) {
        console.log(`Error, ${err}`)
    }
}

testDb();





