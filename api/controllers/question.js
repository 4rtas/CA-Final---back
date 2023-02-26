import { response } from "express";
import QuestionSchema from "../models/questionModel.js";
import AnswerSchema from "../models/answerModel.js";
import UserSchema from "../models/userModel.js";
import auth from "../middlewares/auth.js";
import mongoose from "mongoose";

async function POST_QUESTION(req, res) {
  const question = new QuestionSchema({
    title: req.body.title,
    dateCreated: new Date(),
    answersIds: [],
    answered: false,
  });
  question
    .save()
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Your question was submitted successfully",
        question: result,
      });
    })
    .catch((err) => {
      console.log("Error occured", err);
      res
        .status(404)
        .json({ response: "Uppss.. Please try again later", error: err });
    });
}

async function GET_QUESTIONS(req, res) {
  QuestionSchema.find()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(404).json({ response: "Uppss.. Please try again later" });
    });
}

function DELETE_QUESTION_BY_ID(req, res) {
  QuestionSchema.deleteOne({ _id: req.body.id })
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Your question was deleted successfully",
        deletedQuestion: result,
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(404).json({ response: "Uppss.. Please try again later" });
    });
}

function ADD_ANSWER(req, res) {
  const ObjectId = mongoose.Types.ObjectId;
  const answer = new AnswerSchema({
    content: req.body.content,
    dateCreated: new Date(),
    questionId: req.params.id,
  });
  answer
    .save()
    .then((result) => {
      AnswerSchema.updateOne({ _id: result._id }, { id: result._id }).exec();
      const id = result._id.toString();
      QuestionSchema.updateOne(
        { _id: req.params.id },
        { answered: true, $push: { answersIds: result._id } }
      ).exec();

      return res.status(200).json({
        statusMessage: "Following question was answered successfully",
        result: result,
      });
    })
    .catch((err) => {
      console.log("Error occured", err);
      res.status(404).json({ response: "Uppss.. Please try again later" });
    });
}

async function GET_QUESTIONS_WITH_ANSWERS(req, res) {
  const ObjectId = mongoose.Types.ObjectId;

  const data = await QuestionSchema.aggregate([
    {
      $lookup: {
        from: "answers",
        localField: "answersIds",
        foreignField: "_id",
        as: "questionAnswers",
      },
    },
    { $match: { _id: ObjectId(req.params.id) } },
  ]).exec();
  return res.status(200).json({ data });
}

function DELETE_ANSWER_ID(req, res) {
  AnswerSchema.deleteOne({ _id: req.params.id })
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Your answer was deleted successfully",
        deletedAnswer: result,
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(404).json({ response: "Uppss.. Please try again later" });
    });
}

export {
  POST_QUESTION,
  GET_QUESTIONS,
  DELETE_QUESTION_BY_ID,
  ADD_ANSWER,
  GET_QUESTIONS_WITH_ANSWERS,
  DELETE_ANSWER_ID,
};
