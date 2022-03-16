/**
 *     dependancies
 */


  const express = require('express')

  const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


/**
 *  firebase section
 */

 const serviceAccount = require('./serviceAccountKey.json');

 initializeApp({
   credential: cert(serviceAccount)
 });

 const db = getFirestore();
/**
 *      config
 */
  const app = express()
/**
 *  endpoint
 */
app.get('/users', (request, response) => {
  response.set('Access-Control-Allow-Origin','*')
  let users =[]

  db.collection('users').get().then(snapshot => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      users.push(doc.data())
    });
  response.send(users)})
  })


//export{users}

app.listen(process.env.PORT || 3000)
