// or as an es module:
import { MongoClient, Db } from "mongodb";
import { url } from "../../config";
import dotenv from "dotenv";
dotenv.config();
// Connection URL
const client = new MongoClient(url);
// Database Name
const dbName = "admin";
// Use connect method to connect to the server
export async function connection() {
  await client.connect();
  console.log("database connected successfully");
}

export function collection(collectionName: string) {
  return client.db(dbName).collection(collectionName);
}
