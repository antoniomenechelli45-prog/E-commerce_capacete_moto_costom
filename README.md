# ATELIER MOTO — Capacetes Custom & Vintage

E-commerce premium especializado em capacetes artesanais para motocicletas **Custom, Cruiser, Chopper e Café Racer**.

Construído com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS v4**.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra seu navegador em `http://localhost:3000` (ou na porta indicada no terminal).

### Gerar Build de Produção
```bash
npm run build
```
Os arquivos otimizados para produção serão gerados na pasta `dist/`.

---

## 🐙 Como Publicar no GitHub

1. Crie um novo repositório no seu GitHub (ex: `atelier-moto`).
2. No terminal da sua máquina, dentro da pasta do projeto, execute:

```bash
# Inicializar o repositório git (se ainda não iniciado)
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: Atelier Moto e-commerce completo"

# Definir a branch principal como main
git branch -M main

# Vincular ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/SEU_USUARIO/atelier-moto.git

# Enviar os arquivos
git push -u origin main
```

---

## 🌐 Como Publicar no Netlify

O projeto já está 100% configurado para o Netlify com os arquivos `netlify.toml` e `public/_redirects`.

### Opção 1: Deploy Automático via GitHub (Recomendado)
1. Acesse o [Netlify](https://www.netlify.com/) e faça login.
2. Clique em **"Add new site"** > **"Import an existing project"**.
3. Selecione **GitHub** e escolha o repositório `atelier-moto`.
4. O Netlify detectará automaticamente as configurações através do `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy site"**. A cada novo `git push` no GitHub, o Netlify atualizará seu site automaticamente!

### Opção 2: Deploy Direto via Netlify CLI
```bash
# Instalar a CLI do Netlify globalmente
npm install -g netlify-cli

# Fazer login
netlify login

# Fazer deploy em produção
netlify deploy --prod --dir=dist
```

### Opção 3: Arrastar e Soltar (Manual)
1. Rode `npm run build` no seu computador.
2. Acesse o painel do Netlify e vá na aba **Sites**.
3. Arraste a pasta `dist` gerada diretamente para a área de upload do Netlify.

---

## 🛠️ Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Lucide React** (Ícones)
- **Motion** (Transições e Animações)

---

## 📄 Licença
Código aberto sob a licença [Apache 2.0](LICENSE).
