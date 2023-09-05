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
  const listaEl = document.querySelector(".lista");

  if (!listaEl.children[0]) {
    cosasQueAprendimos.forEach((cosa) => {
      const liEl = document.createElement("li");
      liEl.textContent = cosa.tema;
      liEl.classList.add(cosa.class);
      listaEl.append(liEl);
    });
  }
};

function main() {
  const button = document.querySelectorAll(".button");
  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.id === "eliminar") {
        eliminarLi();
        btn.classList.add("presionado");
        setTimeout(() => {
          btn.classList.remove("presionado");
        }, 200);
      }
      if (e.target.id === "agregar") {
        agregarClases("special");
        agregarLi();
        btn.classList.add("presionado");
        setTimeout(() => {
          btn.classList.remove("presionado");
        }, 200);
      }
    });
  });
}

main();
