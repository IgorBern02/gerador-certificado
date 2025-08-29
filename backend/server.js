import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import certificadosRoutes from "./routes/certificadosRoutes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:10000", // Angular local
      "https://gerador-certificado.onrender.com", // Angular no Vercel
    ],
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    credentials: true,
  })
);
app.use(express.json());

// Conexão MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => console.error("❌ Erro ao conectar:", err));

// Rotas
app.use("/certificados", certificadosRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
