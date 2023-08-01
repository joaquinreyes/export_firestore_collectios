# Firestore Data Exporter

This is a simple Node.js script that exports data from Firestore to a JSON file.

## Requirements

1. Node.js and npm installed on your machine.
2. A Firebase project with Firestore data.
3. Firebase Admin SDK and Firestore installed in your project.
4. A service account key file (usually named `serviceAccountKey.json`) for your Firebase project.

## Steps

1. Install Firebase Admin SDK and Firestore in your project. If they're not installed yet, you can install them using npm:

    ```
    npm install firebase-admin@9.5.0 @google-cloud/firestore
    ```

2. Replace the path to the service account key file in the `export.js` script:

    ```javascript
    var serviceAccount = require("./path/to/your/serviceAccountKey.json");
    ```

3. Run the `export.js` script:

    ```
    node export.js
    ```

4. After running the script, you will see a message in the console:

    ```
    Firestore data has been written to firestore-export.json
    ```

    This means that the Firestore data has been successfully exported to a file named `firestore-export.json`.

## Notes

- The exported data includes all collections and documents from your Firestore database.
- Each collection in your Firestore database is represented as a property in the exported JSON object. The property's key is the collection ID, and the property's value is an array of documents. Each document is an object that contains the data of a Firestore document.
- If you want to export data from a different Firebase project, you need to use the service account key file for that project.
- Be careful not to expose your service account key file. It contains sensitive information that could be used to access your Firebase project. Do not share it with others, and do not include it in your version control system.
