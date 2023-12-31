const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timestamps: true,
});

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;
