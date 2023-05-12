const express = require("express");
const {createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout} = require('../controllers/workoutController')

const router = express.Router();


//get all workouts
router.get("/", getWorkouts);

//get individual workout
router.get("/:id", getWorkout);

//post workout
router.post("/", createWorkout);

//deleting a workout
router.delete("/:id", deleteWorkout);

//updating a workout
router.patch("/:id", updateWorkout);

module.exports = router;
