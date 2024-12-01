import Express, { json } from "express";
import cors from "cors";
const app = Express();

// Middlewares
app.use(json());
app.use(cors());

// Datebase connected
import { connectdb } from "./db/connect-db";
connectdb()

// Router
import router from "./routers/router";
app.use("/api", router);

import { port } from "./helpers/shared";
app.listen(port, () => {
  console.log(`Server is running to ${port}`);
});
