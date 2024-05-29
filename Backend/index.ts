import mongoose from "mongoose";
import app from "./src/config/express";
import { config } from "./src/config/env";

mongoose
  .connect(config.DATABASE_URL)
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log("error in database", err);
  });

  app.listen(config.APP_PORT, function () {
    console.log("server running at ", config.APP_PORT);
  });