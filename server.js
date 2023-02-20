const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

app.use(express.json());


//TODO
app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
  });

app.get('/musicians/:id', async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  if (musician) {
    res.json(musician);
  } else {
    res.status(404).json({ message: "Musician not found" });
  }
});

app.post('/musicians', async (req, res) => {
    try {
      const musician = await Musician.create(req.body);
      res.status(201).json(musician);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
app.use(musicianRouter);

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})