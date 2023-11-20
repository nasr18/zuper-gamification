const { Schema, model } = require("mongoose");

// const dbURI = "mongodb://localhost:27017/gamification";
// const dbURI = "mongodb://user:pass@mongodb/gamification";

// MongoDB connection
/*
connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((val) => {
    console.log("DB connection established!!!", val);
  })
  .catch((err) => {
    console.error("error connecting to db:", err);
  });
*/

// Schema definition
const activitySchema = new Schema(
  {
    name: String,
    description: String,
    points: Number,
  },
  { timestamps: true },
);

const userSchema = new Schema(
  {
    name: String,
    username: String,
    email: String,
    points: Number,
    activities: [
      {
        activity: { type: Schema.Types.ObjectId, ref: "Activity" },
        month: String,
      },
    ],
  },
  { timestamps: true },
);

const Activity = model("Activity", activitySchema);
const User = model("User", userSchema);

module.exports = {
  Activity,
  User,
};
