const express = require("express");
const jwt = require("jsonwebtoken");
const jsonwebtokenpassword = "12345";
const app=express();
app.use(express.json())
const All_Users = [
  {
    username: "hiii@gmail.com",
    password: "123",
    name: "hooo"
  },
  {
    username: "oii@gmail.com",
    password: "12453",
    name: "bo"
  },
  {
    username: "iii@gmail.com",
    password: "11123",
    name: "looo"
  }
];

function userExists(username, password) {
let userExists=false;
for(let i=0;i<All_Users.length;i++){
    if(All_Users[i].username==username &&All_Users[i].password==password){
        userExists=true;
    }
}
return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "hehe not allowed",
    });
  }

  var token = jwt.sign({ username: username }, jsonwebtokenpassword);
  return res.json({
    token
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jsonwebtokenpassword);
    const username = decoded.username;

    // Add logic to return users based on the decoded token

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token",
    });
  }
});

app.listen(3000);
