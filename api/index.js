import { customAlphabet } from "nanoid";
const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://maurobritez96:Afc0e8dfb3$$@cluster2.4850ytl.mongodb.net/";
const dbName = "urlshortener";
const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 6);

export default async function handler(req, res) {
  try {
    const client = new MongoClient(url);

    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection("shorturls");

    const result = await collection.deleteMany({});

    console.log(
      `${result.deletedCount} documentos eliminados correctamente de la colección`
    );

    await client.close();
    res.send({
      message: `${result.deletedCount} documentos eliminados correctamente`,
    });
  } catch (error) {
    res.send({ error: "Error interno del servidor" });
  }
}
