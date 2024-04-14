const express = require('express');
const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/toDocontrollers.js');


const router= express.Router();

router.get("/get-todo", getToDo);

router.post("/save-todo", saveToDo);

router.post("/delete-todo", deleteToDo);

router.post("/update-todo", updateToDo);

module.exports = router;