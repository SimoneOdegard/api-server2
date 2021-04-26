'use strict';

const express = require('express');

const clothesSchema = require('../models/clothes.js');
const Clothes = require('../models/data-collection-class.js');
const clothes = new Clothes(clothesSchema);

const clothesRouter = express.Router();

// RESTful routes

clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes)
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

// RESTful route handlers

async function getClothes(req, res) {
  let getAllClothes = await clothes.read();
  res.status(200).json(getAllClothes);
}

async function getOneClothes(req, res) {
  const id = req.params.id;
  let theClothes = await clothes.read(id);
  res.status(200).json(theClothes);
}

async function createClothes(req, res) {
  let content = req.body;
  let createdClothes = await clothes.create(content);
  res.status(201).json(createdClothes);
}

async function updateClothes(req, res) {
  const id = req.params.id;
  let data = req.body;
  let updatedClothes = await clothes.update( id, data );
  res.status(200).json(updatedClothes);
}

async function deleteClothes(req, res) {
  const id = req.params.id;
  let deletedClothes = await clothes.delete( id );
  res.status(200).json({deletedClothes: deletedClothes});
}

module.exports = clothesRouter;