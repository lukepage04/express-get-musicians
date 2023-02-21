const express = require('express');
const { Musician } = require('./Musician');

const musicianRouter = express.Router();

// CREATE
musicianRouter.post('/musicians', async (req, res) => {
  try {
    const musician = await Musician.create(req.body);
    res.status(201).json(musician);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// READ
musicianRouter.get('/musicians/:id', async (req, res) => {
  try {
    const musician = await Musician.findByPk(req.params.id);
    if (musician) {
      res.json(musician);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


// UPDATE
musicianRouter.put('/musicians/:id', async (req, res) => {
  try {
    const [ rowsUpdated, [ updatedMusician ] ] = await Musician.update(req.body, {
      where: { id: req.params.id },
      returning: true
    });
    if (rowsUpdated === 0) {
      res.status(404).send('Not Found');
    } else {
      res.json(updatedMusician);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE
musicianRouter.delete('/musicians/:id', async (req, res) => {
  try {
    const rowsDeleted = await Musician.destroy({
      where: { id: req.params.id }
    });
    if (rowsDeleted === 0) {
      res.status(404).send('Not Found');
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = musicianRouter;
