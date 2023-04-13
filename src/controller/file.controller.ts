import { Request, Response } from "express";
import logger from "../utils/logger";

const upload = (req: Request, res: Response) => {
  //   logger.info(req);
  logger.info(req.file);

  const data = null;
  return res.send(data);
};

export const fileController = {
  upload,
};
