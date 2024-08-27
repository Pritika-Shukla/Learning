const express = require("express");
const { todo } = require("./db");

const app = express();
app.use(express.json());

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs.",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
});

app.get('/todos', (req, res) => {
  const todos = todo.find({});
});

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs.",
    });
    return;
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
