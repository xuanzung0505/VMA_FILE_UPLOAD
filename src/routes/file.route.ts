import express from "express";
import { fileController } from "../controller/file.controller";
import validate from "../middleware/validate";
import { fileValidation } from "../validation/file.validation";
import { fileUpload } from "../utils/myMulter";

const router = express.Router({ caseSensitive: true });

router.route("/").post(
  //
  // validate(fileValidation.create),
  fileUpload.single("image"),
  fileController.upload
);

export const fileRouter = router;
