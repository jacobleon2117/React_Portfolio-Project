const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP",
});
app.use("/api/", limiter);

let visitors = [];

const getClientIP = (req) => {
  return (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null)
  );
};

app.get("/api/visitors", (req, res) => {
  const clientIP = getClientIP(req);

  const safeVisitors = visitors.map(({ ip, ...visitor }) => visitor);

  const hasSubmitted = visitors.some((visitor) => visitor.ip === clientIP);
  const myVisitor = visitors.find((visitor) => visitor.ip === clientIP);

  res.json({
    visitors: safeVisitors,
    hasSubmitted,
    myName: myVisitor ? myVisitor.name : null,
  });
});

app.post("/api/visitors", (req, res) => {
  const { name } = req.body;
  const clientIP = getClientIP(req);

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Name is required" });
  }

  if (name.length < 2 || name.length > 20) {
    return res
      .status(400)
      .json({ error: "Name must be between 2-20 characters" });
  }

  const existingVisitor = visitors.find((visitor) => visitor.ip === clientIP);
  if (existingVisitor) {
    return res.status(409).json({
      error: "You have already added your name",
      existingName: existingVisitor.name,
    });
  }

  const newVisitor = {
    id: Date.now().toString(),
    name: name.trim(),
    date: new Date().toISOString().split("T")[0],
    ip: clientIP,
  };

  visitors.push(newVisitor);

  const { ip, ...safeVisitor } = newVisitor;
  res.status(201).json({ visitor: safeVisitor });
});

app.delete("/api/visitors/mine", (req, res) => {
  const clientIP = getClientIP(req);

  const initialLength = visitors.length;
  visitors = visitors.filter((visitor) => visitor.ip !== clientIP);

  if (visitors.length < initialLength) {
    res.json({ message: "Your name has been removed" });
  } else {
    res.status(404).json({ error: "No visitor found for your IP" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
