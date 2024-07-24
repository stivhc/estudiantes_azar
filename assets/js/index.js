const estudiantes = [
  "Andres Gallardo Reuque",
  "Esteban Hernández Cáceres",
  "Camila Chavez Ubilla",
  "Yexy Xiorely Herrera Marcano",
  "Nicole Pinilla Diaz",
  "Natalia Peña Díaz",
  "Valery Maragaño Andrade",
  "Vanessa Katherine Morales Norambuena",
  "Arlenis González Rodríguez",
  "Karen Limari Castro",
  "Ambar Zambrano Venegas",
  "Liuva Salas Pérez",
  "Camila Riquelme Gutierrez",
  "Rosa Rubio Pacheco",
  "Nebenca Zapata Gomez",
  "Bárbara Hurtado Ahumada",
  "Marco Alvarado Troncoso",
  "Felipe Villarroel Sanles",
  "Iván Unquén Damian",
  "Francisco Monroy Herrera",
  "Andrea Alvarez Gonzalez",
  "Cristopher Noriega Figueroa",
  "Francisco José Colomer Bonometti",
  "Claudia Verónica Aguayo Lagos",
  "Benjamin Patricio Pardo Rodriguez",
  "Alejandro Antonio Almendras Gálvez",
  "Carlos René Alberto Silva Díaz",
  "Joaquin Eduardo Paredes Reyes",
  "Miguel Jesús Martínez Fuenzalida",
  "Cristofer Fernando Orellana Delgado",
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generarGrupos() {
  shuffle(estudiantes);
  const grupos = [];
  const numGrupos = 6;
  const estudiantesPorGrupo = Math.ceil(estudiantes.length / numGrupos);

  for (let i = 0; i < numGrupos; i++) {
    grupos[i] = estudiantes.slice(
      i * estudiantesPorGrupo,
      (i + 1) * estudiantesPorGrupo
    );
  }

  mostrarGrupos(grupos);
}

function mostrarGrupos(grupos) {
  const container = document.getElementById("grupos");
  container.innerHTML = "";
  grupos.forEach((grupo, index) => {
    const grupoDiv = document.createElement("div");
    grupoDiv.className = "group";
    grupoDiv.innerHTML = `<h2>Grupo ${index + 1}</h2>`;
    const ul = document.createElement("ul");
    grupo.forEach((estudiante) => {
      const li = document.createElement("li");
      li.textContent = estudiante;
      ul.appendChild(li);
    });
    grupoDiv.appendChild(ul);
    container.appendChild(grupoDiv);
  });
}
