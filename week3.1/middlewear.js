// const express = require("express");
// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (username !== "Pritika" && password !== "12345") {
//     res.status(400).json({ msg: "Something is wrong" });
//     return;
//   }
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: "Something is wrong" });
//     return;
//   }
//     res.json({
//       msg: "Your kidney is fine",
//     });

// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// const express = require("express");
// const app = express();

// function useMiddleware(req, res, next) {
//   if (username !== "Pritika" && password !== "12345") {
//     res.status(400).json({ msg: "Something is wrong" });
//     return;
//   } else {
//     next();
//   }
// }

// function kidneyMiddlewear(req, res, next) {
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: "Something is wrong" });
//     return;
//   }else {
//     next();
//   }
// }
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


const express = require("express");
const app = express();
let noOfReq=0;
function calcReq(req,res,next){
    noOfReq++;
    console.log(noOfReq);
    next();
}
app.use(calcReq)

app.post("/health-checkup", function (req, res) {

});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });