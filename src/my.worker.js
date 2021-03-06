
const dbDetails = {
    name: 'MyDatabasePhotoApp',
    version: 1
}

self.addEventListener('message', (e) =>{
    const workerRes = e.data;

    console.log(e.data);
    postMessage(workerRes);
    createDB(workerRes);
})


// indexDB my ass
function createDB(userPw) {
    return new Promise((resolve, reject) => {
        // creating db
        const request = indexedDB.open(dbDetails.name, dbDetails.version);
        
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
            obStore.put(userPw, '#1' );

            resolve('My DB has been created successfully');
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







