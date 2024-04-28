import mongoose, { Schema } from "mongoose";

const matchSchema = new Schema({
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
    },
  },
  venue: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  scores: {
    home: {
      type: Number,
      default: 0,
      gols: [
        {
          namePlayer: {
            type: String,
            required: true,
          },
          ScorerMinute: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    away: {
      type: Number,
      default: 0,
      gols: [
        {
          namePlayer: {
            type: String,
            required: true,
          },
          ScorerMinute: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  event: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
  },
  isVarcheck: {
    type: Boolean,
    default: false,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});

const Match = mongoose.model("Match", matchSchema);

export default Match;
