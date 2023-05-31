// eslint-disable-next-line import/no-extraneous-dependencies
import "dotenv/config";
import app from "./app";

app.listen(process.env.PORT);
