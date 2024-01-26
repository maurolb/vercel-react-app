// import { customAlphabet } from "nanoid";
// const MongoClient = require("mongodb").MongoClient;

// const url =
//   "mongodb+srv://maurobritez96:Afc0e8dfb3$$@cluster2.4850ytl.mongodb.net/";
// const dbName = "urlshortener";
// const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 6);

export default async function handler(req, res) {
  let message = "default";
  message = await timer(2000);

  res.send({
    message,
  });
}

async function timer(time = 1000) {
  setTimeout(() => {
    return (message = "hola");
  }, time);
}

// async function deleteAll() {
//   const client = new MongoClient(url);

//   await client.connect();

//   const db = client.db(dbName);

//   const collection = db.collection("shorturls");

//   const result = await collection.deleteMany({});

//   await client.close();

//   if (result) {
//     return "documentos eliminados correctamente";
//   }
//   return "no se pudo eliminar";
// }
