import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    maxPeople: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      redequire: true,
    },
    roomNumbers: [{ number: Number, unavailaableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
