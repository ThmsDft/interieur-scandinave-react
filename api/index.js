import express from "express";
import produitsRoutes from "./routes/produits.js";
import categoriesRoutes from "./routes/categories.js";
import fabricantsRoutes from "./routes/fabricants.js";
import designersRoutes from "./routes/designers.js";

const app = express();

app.use(express.json());
app.use("/api/produits", produitsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/fabricants", fabricantsRoutes);
app.use("/api/designers", designersRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
