import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

// Definir schema e modelo para certificados
const certificadoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  curso: { type: String, required: true },
  data: { type: String, required: true },
});

const Certificado = mongoose.model("Certificado", certificadoSchema);

// Rotas
app.get("/certificados", async (req, res) => {
  const certificados = await Certificado.find();
  res.json(certificados);
});

app.post("/certificados", async (req, res) => {
  const novoCertificado = new Certificado(req.body);
  await novoCertificado.save();
  res.json(novoCertificado);
});

app.put("/certificados/:id", async (req, res) => {
  const certificadoAtualizado = await Certificado.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(certificadoAtualizado);
});

app.delete("/certificados/:id", async (req, res) => {
  await Certificado.findByIdAndDelete(req.params.id);
  res.json({ mensagem: "Certificado removido" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
