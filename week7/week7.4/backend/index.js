const express = require("express");
const app = express();
app.use(express.json());

let notifications = { network: 7, jobs: 8, messaging: 7, notifications: 5 };

// Get all notifications
app.get("/notifications", (req, res) => {
  res.json(notifications);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
