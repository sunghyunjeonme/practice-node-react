const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

// application/x-www-form-urlencoded 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// application/json을 분석해줌
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sunghyunjeonme:yu5282yu@practice-node-react.9ofkp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// [회원가입을 위한 Route]
app.post("/register", (req, res) => {
  // 회원가입할 때 필요한 정보를 클라이언트에서 가지고 오면
  // 그것을 데이터 베이스에 넣어준다.
  const user = new User(req.body);
  // 정보들이 유저 모델에 저장된다.
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
