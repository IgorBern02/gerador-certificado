import express from "express";
import Certificado from "../models/Certificado.js";

const router = express.Router();

// Buscar todos
router.get("/", async (req, res) => {
  const certificados = await Certificado.find();
  res.json(certificados);
});

// Criar
router.post("/", async (req, res) => {
  const novo = new Certificado(req.body);
  await novo.save();
  res.json(novo);
});

// Atualizar
router.put("/:id", async (req, res) => {
  const atualizado = await Certificado.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(atualizado);
});

// Deletar
router.delete("/:id", async (req, res) => {
  await Certificado.findByIdAndDelete(req.params.id);
  res.json({ mensagem: "Certificado removido" });
});

export default router;
