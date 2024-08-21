const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  const username = req.heaaders.username;
  const password = req.header.password;
  Admin.findOne({
    usernameL: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    }
    else{
        res.status(403).json({
            msg: "Admin doesn't exist"
        });
    }
  });
}
module.exports = adminMiddleware;
