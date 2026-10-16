// Catálogo da estante. Edite à vontade: basta adicionar objetos nesta lista.
// Todos os títulos abaixo são obras de domínio público.
const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", capa: "#6b1d1d", nota: "Capitu traiu ou não? O debate segue aberto." },
  { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881, genero: "Romance", capa: "#2f3b2a", nota: "Um defunto autor que conta a vida com ironia." },
  { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, genero: "Romance", capa: "#4a3320", nota: "Retrato naturalista de um Rio de Janeiro fervilhante." },
  { titulo: "Drácula", autor: "Bram Stoker", ano: 1897, genero: "Terror", capa: "#3a1020", nota: "Cartas, diários e um conde que não aparece no espelho." },
  { titulo: "Frankenstein", autor: "Mary Shelley", ano: 1818, genero: "Terror", capa: "#1f2f3d", nota: "A criatura e o criador, e quem é o verdadeiro monstro." },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen", ano: 1813, genero: "Clássico", capa: "#5b3a4f", nota: "Sociedade, casamentos e muita ironia fina." },
  { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", ano: 1865, genero: "Fantasia", capa: "#24454a", nota: "Lógica e nonsense caindo juntos pela toca do coelho." },
  { titulo: "A Máquina do Tempo", autor: "H. G. Wells", ano: 1895, genero: "Ficção científica", capa: "#4e4a1c", nota: "Um dos pilares da ficção científica moderna." },
  { titulo: "Vinte Mil Léguas Submarinas", autor: "Júlio Verne", ano: 1870, genero: "Ficção científica", capa: "#1b3b4b", nota: "A bordo do Nautilus, sob o comando do capitão Nemo." }
];

const TODOS = "Todos";
const elFiltros = document.getElementById("filtros");
const elEstante = document.getElementById("estante-livros");

function criarElemento(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

function desenharLivros(genero) {
  elEstante.replaceChildren();
  const lista = genero === TODOS ? livros : livros.filter(l => l.genero === genero);

  if (lista.length === 0) {
    elEstante.appendChild(criarElemento("p", "vazio", "Nenhum volume nesta prateleira."));
    return;
  }

  lista.forEach(l => {
    const card = criarElemento("article", "livro");
    card.style.setProperty("--capa", l.capa);
    card.appendChild(criarElemento("h3", "", l.titulo));
    card.appendChild(criarElemento("p", "autor", l.autor));
    card.appendChild(criarElemento("p", "nota", l.nota));
    card.appendChild(criarElemento("p", "ano", `${l.genero.toUpperCase()} · ${l.ano}`));
    elEstante.appendChild(card);
  });
}

function desenharFiltros() {
  const generos = [TODOS, ...new Set(livros.map(l => l.genero))];

  generos.forEach((g, i) => {
    const botao = criarElemento("button", "filtro", g);
    botao.type = "button";
    botao.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    botao.addEventListener("click", () => {
      elFiltros.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", "false"));
      botao.setAttribute("aria-pressed", "true");
      desenharLivros(g);
    });
    elFiltros.appendChild(botao);
  });
}

desenharFiltros();
desenharLivros(TODOS);

document.getElementById("ano").textContent = new Date().getFullYear();