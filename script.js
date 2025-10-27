const contraseñaCorrecta = "139217";
let pinSeleccionado = "";
let oficialesSeleccionados = new Set();
let vehiculoSeleccionado = "";
let lugaresSeleccionados = [];

const jerarquia = [
  "Comisario",
  "Inspector General",
  "Inspector Jefe",
  "Inspector",
  "Subinspector",
  "Oficial",
  "Suboficial",
  "Policía"
];

const oficiales = {
  "Forensia": [
    { nombre: "Subinspector Acosta Gutiérrez José Raymundo", sexo: "masculino" },
    { nombre: "Suboficial Díaz Anguiano Marco Antonio", sexo: "masculino" },
    { nombre: "Policía Rodríguez González Teresa Alejandra", sexo: "femenino" }
    { nombre: "Suboficial Viguerías Tiscareño Juan Antonio", sexo: "masculino" },

  ],
  "Operativos": [
    { nombre: "Comisario Oropeza Cruz Fredy", sexo: "masculino" },
    { nombre: "Oficial Jiménez Rivera Sinuhé", sexo: "masculino" },
    { nombre: "Suboficial Vega Cardona Juan David", sexo: "masculino" },
    { nombre: "Suboficial Zaleta Perea Oliver de Jesús", sexo: "masculino" },
    { nombre: "Suboficial García Alemán Celeste", sexo: "femenino" },
    { nombre: "Suboficial Sánchez Ruiz Wendy Noemí", sexo: "femenino" }
    { nombre: "Policía Esparza Figueroa Mario Alberto", sexo: "masculino" },
    { nombre: "Policía Domínguez Reyes Saydi Mayne", sexo: "femenino" },
  ],
  "Prevención": [
    { nombre: "Subinspector Ontiveros Susana", sexo: "femenino" },
    { nombre: "Suboficial Sandoval Vázquez Alondra", sexo: "femenino" },
    { nombre: "Oficial Rodríguez García Uriel Gumaro", sexo: "masculino" },
    { nombre: "Suboficial Cruz Lucero Yesica", sexo: "femenino" },
    { nombre: "Suboficial Macías Vargas Ruth Noemí", sexo: "femenino" },
    { nombre: "Suboficial Novoa Christian Jesús", sexo: "masculino" },
    { nombre: "Suboficial Soledad Macías Carol Ann", sexo: "femenino" },
    { nombre: "Policía Bonilla Colorado Omar Alejandro", sexo: "masculino" },
    { nombre: "Policía Galván Rangel Verónica Berenice", sexo: "femenino" },
    { nombre: "Policía Tolentino Romo Carlos Rodrigo", sexo: "masculino" },
    { nombre: "Policía Cruz Ruiz Paola Johana", sexo: "femenino" },
    { nombre: "Policía Floriano Vivanco Carlos Daniel", sexo: "masculino" },
    { nombre: "Policía Vargas Vázquez Carlos Javier", sexo: "masculino" },
    { nombre: "Policía Bolaños González Elena", sexo: "femenino" },
    { nombre: "Policía Díaz Gómez Edgar", sexo: "masculino" },
    { nombre: "Policía López Gutiérrez Juana Yulissa", sexo: "femenino" },
    { nombre: "Policía Martínez Martínez Jennifer Danae", sexo: "femenino" },
    { nombre: "Policía Mejía Montoya Natalia Elizabeth", sexo: "femenino" },
    { nombre: "Policía Monreal Acosta Omar", sexo: "masculino" },
    { nombre: "Policía Ramírez Ramírez Silvia Adilene", sexo: "femenino" },
    { nombre: "Policía Servín González Mauricio David", sexo: "masculino" }
  ],
  "Técnicas": [
    { nombre: "Inspector Gral. Díaz López Antonio", sexo: "masculino" },
    { nombre: "Inspector Arias Camino Cristina Concepción", sexo: "femenino" },
    { nombre: "Subinspector Rivero Bautista Ricardo", sexo: "masculino" },
    { nombre: "Subinspector Salas de los Santos Moisés", sexo: "masculino" },
    { nombre: "Suboficial Herrera Torres Emilio", sexo: "masculino" },
    { nombre: "Suboficial Ibarra Aguilar Omar Rodrigo", sexo: "masculino" },
    { nombre: "Suboficial Murillo de Lira Edgar Arturo", sexo: "masculino" },
    { nombre: "Suboficial González Solís Carlos Alberto", sexo: "masculino" },
    { nombre: "Suboficial Pérez Otero Alfa Iris Victoria", sexo: "femenino" },
    { nombre: "Suboficial Valenzuela Rangel Sergio Favian", sexo: "masculino" }
  ],
  "Administrativa": [
    { nombre: "Inspector Gral. Guajardo García Francisco de Guadalupe", sexo: "masculino" },
    { nombre: "Suboficial Viguerías Tiscareño Juan Antonio", sexo: "masculino" },
    { nombre: "Policía Luevano Vázquez Diana Katia", sexo: "femenino" },
    { nombre: "Policía Sánchez Cardona Jenny Monserrat", sexo: "femenino" }
  ]
};

function verificarEnTiempoReal(valor) {
  if (valor === contraseñaCorrecta) verificarContraseña();
}

function verificarContraseña() {
  const contraseñaIngresada = document.getElementById("password").value;
  if (contraseñaIngresada === contraseñaCorrecta) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("hidden");
    actualizarFechaHora();
    mostrarVehiculos();
  } else {
    document.getElementById("mensaje").textContent = "Contraseña incorrecta.";
  }
}

function seleccionarPin(tipo) {
  pinSeleccionado = tipo;
  document.getElementById("btnSalida").classList.remove("seleccionado");
  document.getElementById("btnRegreso").classList.remove("seleccionado");
  document.getElementById(`btn${tipo}`).classList.add("seleccionado");
  document.getElementById("pinConfirmado").textContent = `✅ Has seleccionado crear un PIN de ${tipo}.`;
}

function actualizarFechaHora() {
  const fechaHoraDiv = document.getElementById("fechaHora");
  setInterval(() => {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-ES');
    const hora = ahora.toLocaleTimeString('es-ES');
    fechaHoraDiv.textContent = `Fecha: ${fecha} | Hora: ${hora}`;
  }, 1000);
}

function mostrarOficiales() {
  const checkboxes = document.querySelectorAll(".area");
  const listaDiv = document.getElementById("oficialesLista");

  checkboxes.forEach(cb => {
    const area = cb.value;
    const areaId = `area-${area.replace(/\s/g, '_')}`;

    if (cb.checked && !document.getElementById(areaId)) {
      const bloque = document.createElement("div");
      bloque.id = areaId;
      bloque.innerHTML = `<strong>${area}</strong><br>`;
      oficiales[area].forEach(oficial => {
        const id = `${area}-${oficial.nombre}`.replace(/\s/g, '_');
        const seleccionado = Array.from(oficialesSeleccionados).some(o => o.nombre === oficial.nombre) ? "seleccionado" : "";
        bloque.innerHTML += `<div id="${id}" class="oficial ${seleccionado}" onclick="toggleSeleccion('${id}', '${area}', '${oficial.nombre}')">• ${oficial.nombre}</div>`;
      });
      listaDiv.appendChild(bloque);
    }

    if (!cb.checked && document.getElementById(areaId)) {
      document.getElementById(areaId).remove();
      oficiales[area].forEach(oficial => {
        oficialesSeleccionados.forEach(o => {
          if (o.nombre === oficial.nombre) oficialesSeleccionados.delete(o);
        });
        const id = `${area}-${oficial.nombre}`.replace(/\s/g, '_');
        const el = document.getElementById(id);
        if (el) el.classList.remove("seleccionado");
      });
    }
  });

  actualizarOficialesParaFirma();
}

function toggleSeleccion(id, area, nombre) {
  const div = document.getElementById(id);
  if (!div) return;

  const oficial = oficiales[area].find(o => o.nombre === nombre);
  if (!oficial) return;

  if (div.classList.contains("seleccionado")) {
    div.classList.remove("seleccionado");
    oficialesSeleccionados.forEach(o => {
      if (o.nombre === nombre) oficialesSeleccionados.delete(o);
    });
  } else {
    div.classList.add("seleccionado");
    oficialesSeleccionados.add(oficial);
  }

  actualizarOficialesParaFirma();
}

function mostrarVehiculos() {
  const contenedor = document.getElementById("vehiculosLista");
  contenedor.innerHTML = "";

  const columnas = [
    ["Avenger AAA578E", "Charger AG898A2", "Versa AG347A3"],
    ["Hummer AG398A3", "Explorer AG051A3", "Ram AA0383E"],
    ["Tacoma BM002AA", "Jeep AAA531A"]
  ];

  const columnasWrapper = document.createElement("div");
  columnasWrapper.className = "vehiculos-columnas";

  columnas.forEach(lista => {
    const columnaDiv = document.createElement("div");
    columnaDiv.className = "vehiculo-columna";

    lista.forEach(nombre => {
      const id = `vehiculo-${nombre.replace(/\s/g, '_')}`;
      const clase = vehiculoSeleccionado === nombre ? "vehiculo seleccionado" : "vehiculo";
      columnaDiv.innerHTML += `<div id="${id}" class="${clase}" onclick="seleccionarVehiculo('${id}', '${nombre}')">🚙 ${nombre}</div>`;
    });

    columnasWrapper.appendChild(columnaDiv);
  });

  contenedor.appendChild(columnasWrapper);

  const otros = ["Vehículo personal"];
  const extraDiv = document.createElement("div");
  extraDiv.style.marginTop = "20px";
  extraDiv.innerHTML = otros.map(nombre => {
    const id = `vehiculo-${nombre.replace(/\s/g, '_')}`;
    const clase = vehiculoSeleccionado === nombre ? "vehiculo seleccionado" : "vehiculo";
    return `<div id="${id}" class="${clase}" onclick="seleccionarVehiculo('${id}', '${nombre}')">🚗 ${nombre}</div>`;
  }).join("");

  contenedor.appendChild(extraDiv);
}

function seleccionarVehiculo(id, nombre) {
  if (vehiculoSeleccionado) {
    const idAnterior = `vehiculo-${vehiculoSeleccionado.replace(/\s/g, '_')}`;
    const anterior = document.getElementById(idAnterior);
    if (anterior) anterior.classList.remove("seleccionado");
  }

  const actual = document.getElementById(id);
  if (actual) {
    actual.classList.add("seleccionado");
    vehiculoSeleccionado = nombre;
  }
}

function desmarcarRadios() {
  const checks = document.querySelectorAll(".lugar");
  checks.forEach(c => c.checked = false);
  lugaresSeleccionados = [];
}

function registrarLugar(checkbox) {
  const textoVisible = checkbox.parentElement.textContent.trim();
  if (checkbox.checked) {
    if (!lugaresSeleccionados.includes(textoVisible)) {
      lugaresSeleccionados.push(textoVisible);
    }
  } else {
    lugaresSeleccionados = lugaresSeleccionados.filter(l => l !== textoVisible);
  }
}

function actualizarOficialesParaFirma() {
  const select = document.getElementById("oficialFirma");
  select.innerHTML = "";
  const lista = Array.from(oficialesSeleccionados);
  if (lista.length === 0) {
    select.innerHTML = "<option>(ningún oficial seleccionado)</option>";
    return;
  }
  lista.forEach(oficial => {
    const option = document.createElement("option");
    option.value = oficial.nombre;
    option.textContent = oficial.nombre;
    select.appendChild(option);
  });
}

function agruparOficialesPorGradoYGenero(oficiales) {
  const grupos = {};

  oficiales.forEach(of => {
    const grado = jerarquia.find(g => of.nombre.includes(g)) || "Otro";
    const genero = of.sexo;
    if (!grupos[grado]) grupos[grado] = { masculino: [], femenino: [] };
    const nombreSinGrado = of.nombre.replace(grado, "").trim();
    grupos[grado][genero].push(nombreSinGrado);
  });

  const frases = [];

  jerarquia.forEach(grado => {
    if (!grupos[grado]) return;

    const { masculino, femenino } = grupos[grado];
    const todos = [...masculino, ...femenino];
    if (todos.length === 0) return;

    const gradoPlural = grado.toLowerCase() + (grado.endsWith("a") ? "s" : "es");

    // Función para unir nombres con "y" antes del último
    const unirConY = (nombres) => {
      if (nombres.length === 1) return nombres[0];
      if (nombres.length === 2) return `${nombres[0]} y ${nombres[1]}`;
      const ult = nombres.pop();
      return `${nombres.join(", ")} y ${ult}`;
    };

    let frase = "";
    if (todos.length === 1) {
      const pronombre = masculino.length === 1 ? "del" : "de la";
      frase = `${pronombre} ${grado.toLowerCase()} ${todos[0]}`;
    } else if (masculino.length > 0) {
      frase = `de los ${gradoPlural} ${unirConY([...todos])}`;
    } else {
      frase = `de las ${gradoPlural} ${unirConY([...femenino])}`;
    }

    frases.push(frase);
  });

  // Agregar "y" entre los grupos al final si hay más de uno
  if (frases.length > 1) {
    const ult = frases.pop();
    return `${frases.join("; ")}; y ${ult}`;
  } else {
    return frases[0] || "";
  }
}



function generarPin() {
  const otroLugar = document.getElementById("otroLugar").value.trim();
  let lugares = [...lugaresSeleccionados];
  if (otroLugar !== "") lugares.push(otroLugar);
  if (lugares.length === 0) {
    alert("Por favor selecciona al menos un lugar.");
    return;
  }

// Limpia lugares duplicados de "a " al inicio
const lugaresLimpios = lugares.map(l => l.replace(/^a\s+/i, '').trim());

    let lugarFinal = "";
    if (lugaresLimpios.length === 1) {
      lugarFinal = `a ${lugaresLimpios[0]}`;
    } else if (lugaresLimpios.length === 2) {
    lugarFinal = `a ${lugaresLimpios[0]} y posteriormente a ${lugaresLimpios[1]}`;
  } else {
    const primeras = lugaresLimpios.slice(0, -1).join(", ");
    const ultima = lugaresLimpios[lugaresLimpios.length - 1];
    lugarFinal = `a ${primeras} y posteriormente a ${ultima}`;
    }


  const oficialFirma = document.getElementById("oficialFirma").value;
  const oficialesArray = Array.from(oficialesSeleccionados);
  if (!pinSeleccionado || !lugarFinal || !vehiculoSeleccionado || oficialesArray.length === 0 || !oficialFirma) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const saludo = new Date().getHours() < 12 ? "Buenos días" : (new Date().getHours() < 19 ? "Buenas tardes" : "Buenas noches");
  const articuloPin = pinSeleccionado === "Salida" ? "la" : "el";
  const nombreOficial = agruparOficialesPorGradoYGenero(oficialesArray);
  const fecha = new Date().toLocaleDateString('es-ES');
  const hora = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  const pinTexto = `*SECRETARÍA DE SEGURIDAD PÚBLICA*\n` +
                   `*DIRECCIÓN GENERAL DE POLICÍA CIBERNÉTICA*\n` +
                   `*AGUASCALIENTES, AGS.*\n\n` +
                   `*Fecha*\n${fecha}\n\n` +
                   `*QTR*\n${hora} horas\n\n` +
                   `*${saludo}*\nPara conocimiento de la superioridad, por medio del presente me permito informar ${articuloPin} ${pinSeleccionado.toLowerCase()} ${nombreOficial}, ${oficialesArray.length > 1 ? "quienes se dirigen" : "quien se dirige"} ${lugarFinal}.\n\n` +
                   `*Vehículos*\n• ${vehiculoSeleccionado}\n\n` +
                   `*Respetuosamente*\n${oficialFirma}`;

  document.getElementById("resultadoPin").textContent = pinTexto;
}

function copiarPin() {
  const texto = document.getElementById("resultadoPin").textContent;
  if (!texto) {
    alert("Primero genera el PIN.");
    return;
  }

  // Crea un textarea temporal para copiar el texto
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = texto;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // Para móviles

  try {
    const exito = document.execCommand("copy");
    if (exito) {
      alert("PIN copiado al portapapeles.");
    } else {
      alert("Error al copiar. Intenta manualmente.");
    }
  } catch (err) {
    alert("Error al copiar: " + err);
  }

  // Limpia
  document.body.removeChild(tempTextArea);
}



