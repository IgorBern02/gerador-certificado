export interface Certificado {
  _id?: string; // gerado pelo Mongo
  nome: string;
  curso: string[];
  data: string; // data de emissão
}
