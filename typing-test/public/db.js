  
let db;

const request = indexedDB.open("scores", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};


// some starter code 



// function checkDatabase() {
//     const transaction = db.transaction(["pending"], "readwrite");
//     const store = transaction.objectStore("pending");
//     const getAll = store.getAll();

//     getAll.onsuccess = function () {
//         if (getAll.result.length > 0) {
//           fetch("/api/transaction/bulk", {
//             method: "POST",
//             body: JSON.stringify(getAll.result),
//             headers: {
//               Accept: "application/json, text/plain, */*",
//               "Content-Type": "application/json"
//             }
//           })
//             .then(response => response.json())
//             .then(() => {
//               const transaction = db.transaction(["pending"], "readwrite");
//               const store = transaction.objectStore("pending");
//               store.clear();
//             });
//         }
//       };
//     }



//window.addEventListener("online", checkDatabase);