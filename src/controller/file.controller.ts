import { Request, Response } from "express";
import logger from "../utils/logger";
import { cloudinary, streamifier } from "../utils/cloudinary";
import config from "config";

const upload = (req: Request, res: Response) => {
  //   logger.info(req);
  // logger.info(req.file);

  // Upload
  const result = cloudinary.uploader
    .upload(req.file?.path)
    .then((data: any) => {
      logger.info(data);
      res.send(data);
      // console.log(data.secure_url);
    })
    .catch((err: any) => {
      console.log(err);
      res.send(err);
    });
};

export const fileController = {
  upload,
};
