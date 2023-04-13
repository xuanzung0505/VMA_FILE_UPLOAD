import express from "express";
import { fileRouter } from "./file.route";

const router = express.Router({ caseSensitive: true });

const defaultRoutes = [
  {
    path: "/file",
    route: fileRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
