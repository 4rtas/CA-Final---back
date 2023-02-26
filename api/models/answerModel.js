import mongoose from "mongoose";

const AnswerSchema = mongoose.Schema({
  content: { type: String, required: true },
  dateCreated: { type: Object },
  questionId: { type: String },
});

export default mongoose.model("Answer", AnswerSchema);
