import express, { Router } from "express";
import path from "path";

// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";
import multerConfig from "./config/multer";

import customer from "./apps/controllers/CustomerController";
import user from "./apps/controllers/UserController";
import login from "./apps/controllers/LoginController";
import files from "./apps/controllers/FilesController";

const staticPath = path.resolve(__dirname, "../tmp/uploads");

const routes = new Router();
const upload = multer(multerConfig);

routes.use("/tmp/uploads", express.static(staticPath));

routes.get("/customers", customer.index);
routes.get("/customers/:id", customer.show);
routes.post("/customers", customer.create);
routes.put("/customers/:id", customer.update);
routes.delete("/customers/:id", customer.delete);

routes.get("/users", user.index);
routes.get("/users/:id", user.show);
routes.post("/users", user.create);
routes.put("/users/:id", user.update);
routes.delete("/users/:id", user.delete);

routes.post("/login", login.index);

routes.post("/files", upload.single("file"), files.create);

export default routes;
