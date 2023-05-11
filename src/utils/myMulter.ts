import multer, { FileFilterCallback } from "multer";
import config from "config";

// SET STORAGE
export const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get("localFileDestination"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.originalname.split(".")[0]}-${Date.now()}.${
        file.originalname.split(".")[1]
      }`
    );
  },
});

export const fileFilter = function (req: any, file: any, cb: any) {
  console.log(file.mimetype);
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/svg+xml"
  ) {
    // console.log(file);
    cb(null, true);
  } else {
    cb(new Error("file type is not allowed"), false);
  }
};

export const fileUpload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});
