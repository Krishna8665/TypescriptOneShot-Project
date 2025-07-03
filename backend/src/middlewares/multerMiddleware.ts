import { Request } from "express";
import multer from "multer";
const storage = multer.diskStorage({
    destination : function(req:Request,file:Express.Multer.File,cb:any){
        cb(null,'./src/uploads')  //error aayo vane kei nagarr natra upload src bhitra upload vanne cha tya layera halde
    },
    filename : function(req:Request,file:Express.Multer.File,cb:any){
        cb(null,Date.now() + "-" + file.originalname)
    }
})

export {multer,storage}