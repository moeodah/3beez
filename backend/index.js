/**
 *     dependancies
 */


 const express = require('express')
 const mongodb = require('mongodb')
  const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { MongoDBNamespace } = require('mongodb');


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
app.get('/',async(req,res) =>{
  const posts = await loadposts();
  res.send(await posts.find({}).toArray())
})
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

async function loadposts(){
  const client = await mongodb.MongoClient.connect(
    ('mongodb+srv://Yousefodah:<12344321>@cluster0.rp1mq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    );
    return client.db('vue_express').collection('users');

}
//export{users}

app.listen(process.env.PORT || 3000)
