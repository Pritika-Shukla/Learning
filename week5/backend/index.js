const express = require("express");
const { todo } = require("./db");
const { z } = require("zod"); // Import Zod for validation

const app = express();
app.use(express.json());

// Define the validation schema for creating a todo
const createTodo = z.object({
  title: z.string(),
  description: z.string(),
});

// Define the validation schema for marking a todo as completed
const updateTodo = z.object({
  id: z.string(),
});

// Create a new todo
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
    completed: false
  });

  res.json({
    msg: "Todo created successfully"
  });
});

// Get all todos
app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos
  });
});

// Mark a todo as completed
app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs.",
    });
    return;
  }

  await todo.update({
    _id: req.body.id,
  }, {
    completed: true
  });

  res.json({
    msg: "Todo marked as completed"
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
