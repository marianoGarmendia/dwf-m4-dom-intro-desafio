const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

const eliminarLi = () => {
  const listaEl = document.querySelector(".lista");
  if (listaEl) {
    const liEl = listaEl.querySelectorAll("li");
    liEl.forEach((li) => {
      li.remove();
    });
  }
};

const agregarClases = (clase) => {
  cosasQueAprendimos.forEach((cosa) => {
    cosa.class = clase;
  });
};
const agregarLi = () => {
  cosasQueAprendimos.forEach((cosa) => {
    const liEl = document.createElement("li");
    liEl.textContent = cosa.tema;
    liEl.classList.add(cosa.class);
    const listaEl = document.querySelector(".lista");
    listaEl.append(liEl);
  });
};

function main() {}
eliminarLi();
agregarClases("special");
agregarLi();
main();
