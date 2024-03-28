import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my hotel ... How i can help you ?",
  });
});

app.get("/chicken", (req, res) => {
  res.send("welcome to south india and would love to serve CHICKEN ");
});

app.get("/idli", (req, res) => {
  var customized_idli = {
    name: "rava idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(customized_idli);
});

export { app };
