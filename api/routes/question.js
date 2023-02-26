import express from "express";
const router = express.Router();
import * as questionsController from "../controllers/question.js";
import auth from "../middlewares/auth.js";

router.get("/questions", questionsController.GET_QUESTIONS);

router.post("/question", auth, questionsController.POST_QUESTION);

router.delete("/question/:id", auth, questionsController.DELETE_QUESTION_BY_ID);

router.get("/answers/:id", questionsController.GET_QUESTIONS_WITH_ANSWERS);

router.post("/answer/:id", auth, questionsController.ADD_ANSWER);

router.delete("/answer/:id", auth, questionsController.DELETE_ANSWER_ID);

export { router };
