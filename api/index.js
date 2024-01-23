import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 6);

export default function handler(req, res) {
  const { name = "World" } = req.query;
  return res.send(`Hello ${name}! ${nanoid()}`);
}
