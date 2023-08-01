var admin = require("firebase-admin");
var fs = require('fs');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

async function exportData() {
  const collections = await db.listCollections();
  for (let collection of collections) {
    let data = [];
    const snapshot = await db.collection(collection.id).get();
    data = snapshot.docs.map(doc => doc.data());

    // Write the data for each collection to a separate JSON file
    fs.writeFileSync(`${collection.id}.json`, JSON.stringify(data, null, 2));
    console.log(`Data has been written to ${collection.id}.json`);
  }
}

exportData().catch(error => console.error(error));
