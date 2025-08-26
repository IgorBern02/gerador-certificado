# Gerador Certificado

  Um aplicativo Angular que permite gerar certificados personalizados (imagem) a partir de um template.

##  Funcionalidades

- Geração de certificado em formato imagem via html2canvas
- Upload/customização de dados (nome, curso, data, etc.)
- Visualização e download direto no navegador
- Suporte para deploy contínuo via Netlify

##  Tecnologias usadas

- Angular 20.2.0
- TypeScript
- html2canvas
- Netlify (configuração no `netlify.toml`)
- Bootstrap

##  Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/IgorBern02/gerador-certificado.git
   cd gerador-certificado
   ```

2. Instale as dependências:
    ```bash
      npm install
   ```

3. Rode o servidor de desenvolvimento:
    ```bash
      ng serve
   ```

4. Acesse em http://localhost:4200/.

Build para produção
  ```bash
      ng build --prod
   ```
Os arquivos compilados ficarão em dist/.

Deploy

- Instruções para deploy (por exemplo, via Netlify):
- Criar site no Netlify conectado ao GitHub
- Netlify vai usar ng build --prod
- Repositório já contém netlify.toml com configurações

Próximos passos

- Adicionar suporte a [exemplo]
- Melhorar templates de certificado
- Internacionalização / múltiplos idiomas
- Melhoria visual, responsividade, testes automatizados

Como contribuir

1. Faça um fork
2. Crie uma branch para sua feature ou bugfix (git checkout -b feature/x)
3. Commit suas mudanças (git commit -m "Descrição da mudança")
4. Push para sua branch (git push origin feature/x)
5. Abra um Pull Request


