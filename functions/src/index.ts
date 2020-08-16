import * as functions from 'firebase-functions';
import admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addGratitude = functions.https.onRequest(async (req, res) => {
    const gratitude = req.query.text;
    const writeResult = await admin.firestore().collection('gratitudes').add({gratitude: gratitude});
    res.json({result: `Gratitude with ID: ${writeResult.id} added.`});
});