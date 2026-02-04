# Guia de Deploy - EcoReceitas

Este guia fornece instruções passo a passo para fazer deploy do site EcoReceitas no GitHub e Vercel.

## Pré-requisitos

Antes de começar, certifique-se de ter:
- Uma conta no [GitHub](https://github.com)
- Uma conta no [Vercel](https://vercel.com)
- Git instalado no seu computador

## Passo 1: Preparar o Repositório Local

O projeto já está configurado como um repositório Git. Para verificar:

```bash
cd eco-receitas
git status
```

## Passo 2: Fazer Commit das Alterações

Se houver alterações não commitadas, faça o commit:

```bash
git add .
git commit -m "Versão inicial do EcoReceitas com receitas e ODS 12.3"
```

## Passo 3: Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha os dados:
   - **Repository name:** `eco-receitas`
   - **Description:** "Plataforma web de conscientização e receitas de reaproveitamento de alimentos"
   - **Public** (recomendado para facilitar o deploy)
5. Clique em **"Create repository"**

## Passo 4: Conectar o Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá instruções. Execute os comandos no seu terminal local:

```bash
# Adicionar o remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/eco-receitas.git

# Renomear a branch para main (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

## Passo 5: Deploy no Vercel

### Opção A: Deploy Automático (Recomendado)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em **"New Project"**
3. Selecione o repositório `eco-receitas`
4. Configure as opções de build:
   - **Framework Preset:** Deixe em branco ou selecione "Other"
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`
5. Clique em **"Deploy"**

O Vercel fará o deploy automaticamente e fornecerá uma URL pública.

### Opção B: Deploy Manual via CLI

Se preferir usar a linha de comando:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login no Vercel
vercel login

# Deploy
vercel
```

## Passo 6: Configurar Domínio Customizado (Opcional)

1. Acesse o dashboard do Vercel
2. Selecione o projeto `eco-receitas`
3. Vá para **"Settings"** → **"Domains"**
4. Adicione seu domínio customizado
5. Siga as instruções para configurar os registros DNS

## Passo 7: Monitorar o Deploy

Após o deploy, você pode:

- **Verificar o status:** Acesse o dashboard do Vercel
- **Ver logs:** Clique no deployment para visualizar logs detalhados
- **Fazer rollback:** Se necessário, reverta para uma versão anterior

## Atualizações Futuras

Para fazer atualizações no site após o deploy:

1. Faça as alterações localmente
2. Commit e push para o GitHub:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. O Vercel fará o deploy automaticamente

## Estrutura do Projeto

```
eco-receitas/
├── client/
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── App.tsx      # Componente raiz
│   │   ├── main.tsx     # Ponto de entrada
│   │   └── index.css    # Estilos globais
│   └── index.html       # HTML principal
├── package.json         # Dependências do projeto
└── README.md           # Documentação
```

## Troubleshooting

### Erro: "Build failed"

- Verifique se todas as dependências estão instaladas: `pnpm install`
- Verifique se não há erros TypeScript: `pnpm check`

### Erro: "Port already in use"

- Mude a porta no arquivo `package.json` ou use: `PORT=3001 pnpm dev`

### Imagens não carregam

- Verifique se as URLs das imagens estão corretas no código
- As imagens devem estar hospedadas em CDN (já configuradas no projeto)

## Suporte

Para mais informações:
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do GitHub Pages](https://pages.github.com/)
- [Vite Documentation](https://vitejs.dev/)

## Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com 🌱 para um planeta mais sustentável.**
