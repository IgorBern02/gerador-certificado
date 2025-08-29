# Gerador de Certificados

Uma aplicação web completa para geração de certificados em PDF, desenvolvida com Angular no frontend e Node.js com MongoDB no backend.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular** 12+
- **TypeScript**
- **HTML5/CSS3**
- **Bootstrap** (ou outro framework CSS)
- **PDFMake** para geração de PDFs

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** com Mongoose
- **Multer** para upload de arquivos

## 📋 Pré-requisitos

- Node.js 14+ 
- npm ou yarn
- MongoDB 4.4+
- Angular CLI 12+

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/IgorBern02/gerador-certificado.git
cd gerador-certificado
```

### 2. Configuração do Backend

```bash
# Navegue para a pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:3000/gerador-certificados
UPLOAD_PATH=./uploads
```

### 3. Configuração do Frontend

```bash
# Navegue para a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Configure o environment
cp src/environments/environment.prod.ts src/environments/environment.ts
```

Edite `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

## 🚀 Executando a Aplicação

### Iniciar o MongoDB
Certifique-se que o MongoDB está rodando em sua máquina.

### Executar o Backend
```bash
cd backend
npm run dev
```

### Executar o Frontend
```bash
cd frontend
ng serve
```

A aplicação estará disponível em:
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

## 📁 Estrutura do Projeto

```
gerador-certificado/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   ├── .env
│   └── package.json
│   └── render.yaml
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   ├── environments/
│   │   └── assets/
│   └── package.json
└── README.md
```

## 🎯 Funcionalidades

- ✅ Geração em massa de certificados
- ✅ Download dos certificados
- ✅ Histórico de certificados gerados

## 📊 Modelo de Dados

### Certificado
```javascript
{
  nome: String,
  email: String,
  curso: String,
  dataEmissao: Date,
  arquivoPDF: String
}
```


## 🔧 API Endpoints

### Certificados
- `GET /api/certificados` - Listar certificados
- `POST /api/certificados` - Criar certificado
- `GET /api/certificados/:id` - Buscar certificado
- `GET /api/certificados/download/:id` - Download de certificado

### Uploads
- `POST /api/upload` - Upload de arquivo CSV

### Estilos CSS
Os estilos principais estão em:
`frontend/src/styles.css`

## 📦 Scripts Úteis

### Backend
```bash
npm run dev      # Desenvolvimento com nodemon
npm start        # Produção
npm test         # Executar testes
```

### Frontend
```bash
ng serve         # Servidor de desenvolvimento
ng build         # Build para produção
ng test          # Executar testes
```

## 🐛 Solução de Problemas

### Erro de CORS
Certifique-se de que o CORS está configurado no backend.

### Conexão com MongoDB
Verifique se o MongoDB está rodando e a string de conexão no `.env` está correta.

### Dependências
Execute `npm install` em ambas as pastas (frontend e backend).

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 👥 Autor

**Igor Bernardes** - [GitHub](https://github.com/IgorBern02)

## 📞 Suporte

Se você tiver alguma dúvida ou problema, abra uma [issue](https://github.com/IgorBern02/gerador-certificado/issues) no GitHub.
