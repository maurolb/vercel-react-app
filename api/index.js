export default function handler(req, res) {
  const { name = "pepito" } = req.query;

  res.send({
    message: "hello " + name,
  });
}
