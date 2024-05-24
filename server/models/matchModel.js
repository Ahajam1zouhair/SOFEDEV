import mongoose, { Schema } from "mongoose";

const matchSchema = new Schema({
  competition: {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    emblem: {
      type: String,
      required: true,
    },
  },
  venue: {
    type: String,
    required: true,
  },
  teams: {
    home: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
    },
    away: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
    },
  },
  status: {
    type: String,
    required: true,
  },
  scores: {
    home: {
      type: Number,
      default: 0,
    },
    away: {
      type: Number,
      default: 0,
    },
  },
  date: {
    utcDate: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  varcheck: {
    isVarcheck: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
    },
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});

const Match = mongoose.model("Match", matchSchema);

export default Match;
