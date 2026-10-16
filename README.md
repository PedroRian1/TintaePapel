# 📚 Tinta e Papel

Site de portfólio sobre livros com estética de papel antigo: pergaminho envelhecido, tipografia de época, capas de livro com lombada e um catálogo filtrável por gênero.

Feito apenas com **HTML, CSS e JavaScript puros**, sem frameworks nem dependências.

## ✨ Funcionalidades

- Estante com 9 clássicos de domínio público, filtrável por gênero
- Seção "Lendo agora" com barra de progresso
- Visual vintage: moldura dupla, letra capitular, texto em colunas, carimbos de contato
- Layout responsivo (celular, tablet e desktop)
- Acessibilidade básica: HTML semântico, foco visível, `aria-pressed` nos filtros e respeito a `prefers-reduced-motion`

## 🗂️ Estrutura

```
.
├── index.html   # estrutura e conteúdo da página
├── style.css    # visual (cores, fontes, layout, responsividade)
└── script.js    # catálogo de livros e filtro da estante
```

## 🚀 Como rodar localmente

Não precisa instalar nada. Basta abrir o `index.html` no navegador.

Se preferir um servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## 🌐 Publicando no GitHub Pages

1. Envie os arquivos para a raiz de um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
4. Aguarde alguns minutos: o site ficará em `https://seu-usuario.github.io/nome-do-repositorio`.

## ✏️ Personalização

- **Livros da estante:** edite a lista `livros` no início do `script.js`. Cada livro tem `titulo`, `autor`, `ano`, `genero`, `capa` (cor em hexadecimal) e `nota`.
- **Links de contato:** no `index.html`, troque `SEU-USUARIO` e `seu@email.com` pelos seus dados.
- **Lendo agora:** altere o título, o autor e o percentual de progresso na seção `#lendo` do `index.html`.
- **Cores e fontes:** ajuste as variáveis no `:root` do `style.css`.

## 🔤 Fontes

Carregadas pelo Google Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) e [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English).

## 📖 Sobre as obras

Todos os livros listados no catálogo são de domínio público.

## 📄 Licença

Distribuído sob a licença MIT. Sinta-se à vontade para usar como base para o seu próprio projeto.