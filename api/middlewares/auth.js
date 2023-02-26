import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) {
      req.body.userId = decoded.userId;

      next();
    } else {
      console.log(err, "Authorization failed");
      return res.status(401).json({ error: "Authorization failed" });
    }
  });
}
