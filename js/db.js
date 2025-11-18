// ===== db.js =====
export class Customer {
  constructor(dbName) {
    this.dbName = dbName;
    if (!window.indexedDB) {
      window.alert("Your browser doesn't support a stable version of IndexedDB. \
        Such and such feature will not be available.");
    }
  }

  /**
   * Remove all rows from the database
   * @memberof Customer
   */
  removeAllRows = () => {
    const request = indexedDB.open(this.dbName, 1); // opens DB

    request.onerror = (event) => {
      console.log('removeAllRows - Database error: ', event.target.error.code,
        " - ", event.target.error.message);
    };

    request.onsuccess = (event) => { //read or write trnansaction
      console.log('Deleting all customers...');
      const db = event.target.result;
      const txn = db.transaction('customers', 'readwrite');
      txn.onerror = (event) => {
        console.log('removeAllRows - Txn error: ', event.target.error.code,
          " - ", event.target.error.message);
      };
      txn.oncomplete = (event) => {
        console.log('All rows removed!');
      };
      const objectStore = txn.objectStore('customers'); //obtain all keys
      const getAllKeysRequest = objectStore.getAllKeys();
      getAllKeysRequest.onsuccess = (event) => {
        getAllKeysRequest.result.forEach(key => {
          objectStore.delete(key);
        });
      }
    }
  }

  /**
   * Populate the Customer database with an initial set of customer data
   * @param {[object]} customerData Data to add
   * @memberof Customer
   */
  initialLoad = (customerData) => { //opens DB
    const request = indexedDB.open(this.dbName, 1);

    request.onerror = (event) => {
      console.log('initialLoad - Database error: ', event.target.error.code,
        " - ", event.target.error.message);
    };

    request.onupgradeneeded = (event) => { // create object store and populate DB
      console.log('Populating customers...');
      const db = event.target.result;
      const objectStore = db.createObjectStore('customers', { keyPath: 'userid' });
      objectStore.onerror = (event) => {
        console.log('initialLoad - objectStore error: ', event.target.error.code,
          " - ", event.target.error.message);
      };

      // Create an index to search customers by name and email
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });

      // Populate the database with the initial set of rows
      customerData.forEach(function(customer) {
        objectStore.put(customer);
      });
      db.close();
    };
  }
}

// opens database, read all rows from "customers" table and returns 
// every row as array of objects
export async function queryAllRows() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("customersDB", 1); // opens DB

    request.onerror = (event) => {
      console.log("queryAllRows - Database error:", event.target.error);
      reject(event.target.error);
    };

    // wait for successful open
    request.onsuccess = (event) => {
      const db = event.target.result; //database object

      const txn = db.transaction("customers", "readonly");
      const store = txn.objectStore("customers");

      const getAllRequest = store.getAll();

      getAllRequest.onerror = (event) => {
        console.log("queryAllRows - getAll error:", event.target.error);
        reject(event.target.error);
      };

      getAllRequest.onsuccess = (event) => {
        resolve(getAllRequest.result || []);
      };
    };
  });
}

