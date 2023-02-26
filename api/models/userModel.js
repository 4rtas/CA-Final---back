import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, required: [true, "Can't be blank"] },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Can't be blank"],
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
  },
  password: {
    type: String,
    isLength: {
      options: [{ min: 6 }],
      errorMessage: "Must be at least 6 characters",
    },
  },
});

export default mongoose.model("User", UserSchema);
