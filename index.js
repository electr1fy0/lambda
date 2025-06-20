const express = require("express");
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = 3000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

app.post("/add", async (req, res) => {
  const task = req.body.task;
  if (!task) return res.status(400).send("Missing task");

  const { data, error } = await supabase.from("todos").insert([{ task }]);

  if (error) return res.status(500).send(error.message);
  res.send(`Added task: ${task}`);
});

app.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).send(error.message);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
