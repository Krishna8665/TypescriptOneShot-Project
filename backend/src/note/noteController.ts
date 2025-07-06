import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    createHttpError(500, "something hai");
    const file = req.file
      ? `${envConfig.backendUrl}/${req.file.filename}`
      : "https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?semt=ais_items_boosted&w=740";
    const { title, subtitle, description } = req.body || {};
    if (!title || !subtitle || !description || title === undefined) {
      res.status(400).json({
        message: "Please provide title,subtitle,description",
      });
      return;
    }

    await noteModel.create({
      title,
      subtitle,
      description,
      file,
    });

    res.status(201).json({
      message: "Note created!",
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while creating"));
  }
};

const listNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes fetched",
      data: notes,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while fetching..."));
  }
};
const listNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const note = await noteModel.findById(id);
    if (!note) {
      return next(createHttpError(404, "Note not found with that id"));
    }
    res.status(200).json({
      message: "Notes fetched",
      data: note,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while fetching..."));
  }
};
const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await noteModel.findByIdAndDelete(id); //null auncha so kei le store garna parena
    res.status(200).json({
      message: "Notes deleted",
    });
  } catch (error) {
    return next(createHttpError(500, "Error while fetching..."));
  }
};

export { createNote, listNote, listNotes, deleteNote };
