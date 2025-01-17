import express from "express";

const app = express();
app.use(express.json());

function calculateCircleArea(req, res) {
  const { input } = req.body;

  if (isNaN(input)) {
    return res.status(400).send("Invalid input, input must be a number");
  }
  try {
    const output = Math.PI * Math.pow(input, 2);
    return res.json({ output });
  } catch (error) {
    res.status(500).send("Internal server error bla bla bla");
  }
}

const docs = {
  name: "calculateCircleArea",
  description:
    "Calculate the area of a circle given its radius. Input must be a number",
  input: { type: "number", description: "Radius of the circle", example: 5 },
  output: { type: "number", description: "Area of the circle", example: 78.54 },
};

app.post("/functions/calculateCircleArea", calculateCircleArea);
app.get("/functions/calculateCircleArea", (req, res) => {
  res.json(docs);
});

export { app }; // Export the app for Google Cloud Functions
