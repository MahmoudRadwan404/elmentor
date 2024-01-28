//not done because i dont know if we should use nodemailer or another service

import handle from "../../core/request-class";
import { collection } from "../../models/connection";
import { Request, Response } from "express";

export default async function forget(request: Request, res: Response) {
  const requestHandler = handle(request);
  const email = requestHandler.input("email");
  if (!email) {
    return res.status(400).send({ error: "Please enter email" });
  }
  const usersCollection = collection("users");
  const user = await usersCollection.findOne({ email: email });
  const code = Math.random().toString(36).substring(2, 7);
  if (!user) {
    return res.send({ error: "email not found" });
  }
  await usersCollection.updateOne({ email: email }, { $set: { code: code } });
  res.status(200).send({ code });
}
