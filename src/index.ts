import app from "./app";
import config from "config";
import logger from "./utils/logger";

const port = config.get<number>("port");

let server;

server = app.listen(port, async () => {
  logger.info(`running on ${port}`);
});
