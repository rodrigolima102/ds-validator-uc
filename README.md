# DS Validator — UniCesumar

Validador de aderência ao Design System da UniCesumar.

Analisa: componentes, cores, tipografia, espaçamentos, radius, variáveis e acessibilidade (WCAG 2.2).

## Deploy

### 1. Suba para o GitHub

```bash
git init
git add .
git commit -m "feat: ds validator inicial"
git remote add origin https://github.com/SEU_USUARIO/ds-validator.git
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **Add New → Project**
3. Importe o repositório `ds-validator` do GitHub
4. Clique em **Deploy** — sem configurações extras necessárias

A Vercel detecta automaticamente a estrutura e faz o deploy.

## Uso

1. Acesse a URL gerada pela Vercel
2. Cole o link do arquivo Figma
3. Cole seu Figma Personal Access Token
4. Clique em **Analisar**

## Estrutura

```
ds-validator/
├── api/
│   └── figma.js        # Serverless function (proxy Figma API)
├── public/
│   └── index.html      # Interface do validador
├── vercel.json         # Configuração de rotas
└── package.json
```
