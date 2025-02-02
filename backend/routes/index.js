const express = require('express');
const routes= express.Router();
const initMysql = require("../config/db");


routes.get('/', async (req, res) =>{
  try {
    const results = await conn.query("SELECT * FROM letters");
    res.json(results);
  } catch (err) {
    console.error(err);
  }
});




module.exports = routes;