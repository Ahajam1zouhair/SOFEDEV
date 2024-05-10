import asyncHandler from "express-async-handler";
import Match from "../models/matchModel.js";

// @desc     create   Match
// @route   POST /api/Match
// @access  Private
export const createMatch = asyncHandler(async (req, res) => {
  const { teams, venue, status, event, date } = req.body;
  const match = new Match({
    teams,
    venue,
    status,
    event,
    date,
  });
  await match.save();
  res.status(201).json({
    teams,
    venue,
    status,
    event,
    date,
  });
});
