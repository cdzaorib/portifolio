# Portfólio — Carlos Daniel Cabral Ribeiro

Página única, em português, para recrutadores técnicos e hiring managers
avaliando vagas júnior e estágio.

React 18 · TypeScript · Vite · Tailwind CSS v4. Sem dependências de runtime
além do React: as animações e o alternador de entrada do SalvaMoney são CSS e
`useState`.

## Rodando

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build
```

## Onde ficam os dados

Todo o conteúdo é dado, não markup:

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/projects.ts` | Projetos, exercícios do CS50 e o exemplo do fluxo do SalvaMoney |
| `src/data/profile.ts` | Nome, cargo, faixa de status, texto do "Sobre", stack e contato |
| `src/data/links.ts` | Tipo `MaybeUrl` e o helper `pending()` |

## Placeholders pendentes

Links ainda não fornecidos usam `pending('[[PLACEHOLDER: ...]]')` em
`src/data/projects.ts`. **A interface não renderiza botão nenhum para eles** —
nunca um controle morto. Basta trocar a chamada `pending(...)` pela URL em
string e o botão aparece.

- [ ] Link ao vivo do SalvaMoney — `featuredProject.liveUrl`
- [ ] Repo GitHub do SalvaMoney — `featuredProject.repoUrl`
- [ ] Repo do `filter` — `cs50Exercises[0].repoUrl`
- [ ] Repo do `recover` — `cs50Exercises[1].repoUrl`
- [ ] Repo do `runoff` — `cs50Exercises[2].repoUrl`
- [ ] Foto de perfil — coloque o arquivo em `src/assets/images/profile.jpg`

A foto é resolvida por glob em `src/data/profilePhoto.ts`, então um arquivo
ausente não quebra o build: o hero simplesmente se organiza em uma coluna. Ao
adicionar o arquivo (`.jpg`, `.jpeg`, `.png` ou `.webp`), ele aparece sozinho.

O projeto **Sexta Feira** não tem link por não ter demo pública. Ele não é um
placeholder — o card é descritivo de propósito e não renderiza botões.

## Deploy

Vercel, via `vercel.json` (framework `vite`, saída em `dist`). Auto-deploy pelo
GitHub ou `vercel --prod`.
