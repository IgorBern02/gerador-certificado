import mongoose from "mongoose";

const certificadoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  curso: [{ type: String, required: true }],
  data: { type: String, required: true },
});

export default mongoose.model("Certificado", certificadoSchema);
