import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";

const createNote = async (req:Request,res:Response, next:NextFunction)=>{
    try{
    const file =req.file ? `${envConfig.backendUrl}/${req.file.filename}`:'https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg?semt=ais_items_boosted&w=740'
    const {title,subtitle,description} =req.body
    if(!title || ! subtitle || !description){
        res.status(400).json({
            message : "Please provide title,subtitle,description"
        })
        return
    }

    await noteModel.create({
        title,
        subtitle,
        description,
        file
    })

    res.status(201).json({
        message: "Note created!"

    })
    }catch (error) {
        console.log(error)
        return next(createHttpError(500,'Error while creating'))
    }


}