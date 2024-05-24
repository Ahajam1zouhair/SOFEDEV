import asyncHandler from "express-async-handler";
import Match from "../models/matchModel.js";
import {
  validateMatch,
  validateUpdateMatch,
} from "../requests/ValidateMatch.js";

// @desc     create   Match
// @route   POST /http://localhost:4000/api/match
// @access  Private
export const createMatch = asyncHandler(async (req, res) => {
  const { error } = validateMatch(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const match = new Match(req.body);
  await match.save();
  res.status(201).json(req.body);
});

// @desc    get All Matchs
// @route   GET /http://localhost:4000/api/match
// @access  Public
export const getAllMatch = asyncHandler(async (req, res) => {
  const match = await Match.find();
  res.status(201).json(match);
});
// @desc    get By Id Match
// @route   GET /http://localhost:4000/api/match/:id
// @access  Public
export const getByIdMatch = asyncHandler(async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (!match) {
    return res.status(404).json({ error: "Match not found" });
  }
  res.status(201).json(match);
});

// @desc   Update Match
// @route  Put /http://localhost:4000/api/match/id
// @access Private
export const UpdateMatch = asyncHandler(async (req, res) => {
  const { error } = validateUpdateMatch(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const match = await Match.findById(req.params.id);
  if (!match) {
    return res.status(404).json({ error: "Match not found" });
  }
  const updatematch = await Match.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );
  res.status(200).json(updatematch);
});
// @desc   Delete Match
// @route  Put /http://localhost:4000/api/match/id
// @access Private
export const DeleteMatch = asyncHandler(async (req, res) => {
  const match = await Match.findById(req.params.id);
  if (!match) {
    return res.status(404).json({ error: "Match not found" });
  }
  const updatematch = await Match.deleteOne(match);
  res.status(200).json(updatematch);
});
