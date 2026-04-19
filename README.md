# pulp. — site oficial

Site institucional da produtora pulp., construído com React + Vite + React Router.

---

## Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Abra http://localhost:5173 no navegador
```

---

## Como fazer o build para deploy

```bash
npm run build
```

O Vercel faz isso automaticamente — basta conectar o repositório.

---

## Estrutura de arquivos

```
pulp-site/
├── public/
│   ├── logos/              ← coloque os arquivos de logo aqui
│   │   ├── logo-wordmark.png
│   │   ├── logo-icon.png
│   │   └── logo-vertical.png
│   ├── posters/            ← coloque os cartazes dos filmes aqui
│   │   ├── o-ridiculo.jpg
│   │   ├── vinte-vinte-quatro.jpg
│   │   ├── insaniam.jpg
│   │   ├── brasifilia.jpg
│   │   └── amago.jpg
│   ├── directors/          ← coloque as fotos dos diretores aqui
│   │   ├── francenilton-klava.jpg
│   │   ├── davi-pieri.jpg
│   │   ├── nathalie-costa.jpg
│   │   └── thalita-lemos.jpg
│   ├── stills/             ← coloque os stills de cada filme aqui
│   │   ├── o-ridiculo/
│   │   ├── vinte-vinte-quatro/
│   │   ├── insaniam/
│   │   ├── brasifilia/
│   │   └── amago/
│   └── team/
│       └── equipe-brasifilia.jpg  ← foto da equipe para a página Sobre
└── src/
    ├── data/
    │   └── films.js        ← TODOS os dados dos filmes ficam aqui
    ├── pages/
    │   ├── Home.jsx
    │   ├── Sobre.jsx
    │   ├── Contato.jsx
    │   └── FilmPage.jsx
    └── components/
        ├── Navbar.jsx
        ├── Footer.jsx
        └── FilmCard.jsx
```

---

## Como adicionar imagens

Depois de colocar os arquivos nas pastas corretas (veja estrutura acima),
abra `src/data/films.js` e atualize os campos:

```js
posterSrc: '/posters/nome-do-filme.jpg',      // era null
directorPhotoSrc: '/directors/nome.jpg',       // era null
stills: [
  '/stills/nome-do-filme/still-1.jpg',
  '/stills/nome-do-filme/still-2.jpg',
  '/stills/nome-do-filme/still-3.jpg',
],
```

Para os logos, abra `src/components/Navbar.jsx`, `Footer.jsx` e descomente
os blocos `<img>` já preparados nos comentários.

Para a foto da equipe na página Sobre, abra `src/pages/Sobre.jsx` e siga
o comentário `REPLACE WITH TEAM PHOTO`.

---

## Como atualizar e-mail e Instagram

Busque por `REPLACE WITH OFFICIAL` no projeto inteiro — estão em:
- `src/components/Footer.jsx`
- `src/pages/Contato.jsx`

---

## Deploy no Vercel

1. Crie um repositório no GitHub e faça push deste projeto
2. Acesse vercel.com e clique em "Add New Project"
3. Importe o repositório — o Vercel detecta Vite automaticamente
4. Clique em Deploy
5. Quando tiver o domínio `selopulp.com.br`, conecte em Settings → Domains
