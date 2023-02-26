import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  title: { type: String, required: true },
  dateCreated: { type: Object },
  answersIds: { type: Array },
  answered: { type: Boolean },
});

export default mongoose.model("Question", QuestionSchema);
