import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from "cors";
import routes from "./routes";
import authMiddleware from "./apps/middlewares/auth";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // eslint-disable-next-line prettier/prettier
    this.server.use(cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "authorization"],
      })
    );
    this.server.use(authMiddleware);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
