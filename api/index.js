import express from "express";
import produitsRoutes from "./routes/produits.js";
import categoriesRoutes from "./routes/categories.js";
import fabricantsRoutes from "./routes/fabricants.js";
import designersRoutes from "./routes/designers.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api/produits", produitsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/fabricants", fabricantsRoutes);
app.use("/api/designers", designersRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
