import express from "express";
import Certificado from "../models/Certificado.js";

const router = express.Router();

// Buscar todos
router.get("/", async (req, res) => {
  try {
    const certificado = await Certificado.find();
    res.json(certificado);
  } catch (err) {
    res
      .status(500)
      .json({ erro: "Erro ao buscar certificados", detalhe: err.message });
  }
});

// Buscar por ID
router.get("/:id", async (req, res) => {
  try {
    const certificado = await Certificado.findById(req.params.id);
    if (!certificado) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }
    res.json(certificado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar
router.post("/", async (req, res) => {
  try {
    const novo = new Certificado(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res
      .status(400)
      .json({ erro: "Erro ao criar certificado", detalhe: err.message });
  }
});

// Atualizar
router.put("/:id", async (req, res) => {
  try {
    const atualizado = await Certificado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!atualizado) {
      return res.status(404).json({ erro: "Certificado não encontrado" });
    }

    res.json(atualizado);
  } catch (err) {
    res
      .status(400)
      .json({ erro: "Erro ao atualizar certificado", detalhe: err.message });
  }
});

// Deletar
router.delete("/:id", async (req, res) => {
  try {
    const deletado = await Certificado.findByIdAndDelete(req.params.id);

    if (!deletado) {
      return res.status(404).json({ erro: "Certificado não encontrado" });
    }

    res.json({ mensagem: "Certificado removido com sucesso" });
  } catch (err) {
    res
      .status(500)
      .json({ erro: "Erro ao deletar certificado", detalhe: err.message });
  }
});

export default router;
