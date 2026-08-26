// ==========================================
// 1. PALETA DE COLORES Y ESTADO DE RULETAS
// ==========================================
const paletaColores = [
  "#9146ff", "#EF4444", "#06B6D4", 
  "#F59E0B", "#10B981", "#EC4899", 
  "#3B82F6", "#F97316", "#14B8A6"
];

function obtenerColor(index, totalItems) {
  const paso = 3;
  let colorIndex = (index * paso) % paletaColores.length;
  if (index === totalItems - 1 && colorIndex === 0) {
    colorIndex = (colorIndex + 1) % paletaColores.length;
  }
  return paletaColores[colorIndex];
}

// Algoritmo Fisher-Yates para mezclar arreglos de forma aleatoria
function mezclarArreglo(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function obtenerListaBase() {
  if (typeof OBJETOS_BASE !== 'undefined' && Array.isArray(OBJETOS_BASE) && OBJETOS_BASE.length > 0) {
    return JSON.parse(JSON.stringify(OBJETOS_BASE));
  }
  return [];
}

function cargarItemsStorage() {
  const guardados = localStorage.getItem('ruleta_items');
  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error("Error al leer localStorage:", e);
    }
  }
  const base = mezclarArreglo(obtenerListaBase());
  if (base.length > 0) {
    localStorage.setItem('ruleta_items', JSON.stringify(base));
  }
  return base;
}

// ESTADOS INDEPENDIENTES
let objetosRuleta = cargarItemsStorage();
let youtubeRuleta = []; 
let pestañaActiva = 'objetos'; // 'objetos' | 'youtube'

let ganadorActual = null;
let anguloActual = 0;
let estaGirando = false;

function obtenerListaActiva() {
  return pestañaActiva === 'objetos' ? objetosRuleta : youtubeRuleta;
}

function guardarYActualizar() {
  if (pestañaActiva === 'objetos') {
    localStorage.setItem('ruleta_items', JSON.stringify(objetosRuleta));
    renderizarSidebarObjetos();
  }
  dibujarRuleta();
  actualizarEstadoBotonGirar();
}

function reiniciarListaManual() {
  if (pestañaActiva === 'objetos') {
    objetosRuleta = mezclarArreglo(obtenerListaBase());
  } else {
    youtubeRuleta = [];
  }
  guardarYActualizar();
}

// ==========================================
// 2. NAVEGACIÓN EN PÁGINA MADRE (TABS)
// ==========================================
const tabObjetos = document.getElementById('tab-objetos');
const tabYoutube = document.getElementById('tab-youtube');
const secObjetos = document.getElementById('sec-objetos');
const secYoutube = document.getElementById('sec-youtube');

if (tabObjetos && tabYoutube) {
  tabObjetos.addEventListener('click', () => {
    pestañaActiva = 'objetos';
    tabObjetos.classList.add('active');
    tabYoutube.classList.remove('active');
    secObjetos.classList.add('active');
    secYoutube.classList.remove('active');
    anguloActual = 0;
    guardarYActualizar();
  });

  tabYoutube.addEventListener('click', () => {
    pestañaActiva = 'youtube';
    tabYoutube.classList.add('active');
    tabObjetos.classList.remove('active');
    secYoutube.classList.add('active');
    secObjetos.classList.remove('active');
    anguloActual = 0;
    guardarYActualizar();
  });
}

// ==========================================
// 3. GENERAR PANEL LATERAL (OBJETOS CON BADGES)
// ==========================================
function renderizarSidebarObjetos() {
  const itemsContainer = document.getElementById('itemsList');
  const countBadge = document.querySelector('.item-count');
  
  if (!itemsContainer) return;
  itemsContainer.innerHTML = '';
  if (countBadge) countBadge.textContent = `${objetosRuleta.length} ítems`;

  if (objetosRuleta.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align:center; padding: 20px; color: #adadb8;">
        <p>No quedan ítems en la ruleta.</p>
        <button id="btnResetVacio" style="margin-top: 12px; padding: 8px 16px; background: #9146ff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
          🔄 Reiniciar Lista
        </button>
      </div>
    `;
    const btnResetVacio = document.getElementById('btnResetVacio');
    if (btnResetVacio) btnResetVacio.addEventListener('click', reiniciarListaManual);
    return;
  }

  objetosRuleta.forEach((item, index) => {
    const colorHex = obtenerColor(index, objetosRuleta.length);
    const card = document.createElement('div');
    card.className = 'item-card';

    const thumbHTML = item.imagen 
      ? `<img src="${item.imagen}" class="item-thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
         <div class="item-thumb-placeholder" style="display:none; border: 1px solid ${colorHex}; color:${colorHex}">#${index + 1}</div>`
      : `<div class="item-thumb-placeholder" style="border: 1px solid ${colorHex}; color: ${colorHex}">#${index + 1}</div>`;

    const catTexto = item.categoria || 'Objeto';
    const catClass = `badge-${catTexto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

    card.innerHTML = `
      ${thumbHTML}
      <div class="item-info">
        <span class="item-title">${item.nombre}</span>
        <span class="item-category ${catClass}">${catTexto}</span>
      </div>
    `;
    itemsContainer.appendChild(card);
  });
}

// ==========================================
// 4. MOTOR Y FÍSICAS DE LA RULETA (CANVAS)
// ==========================================
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const spinBtn = document.getElementById('spinBtn');

function actualizarEstadoBotonGirar() {
  if (!spinBtn) return;
  const lista = obtenerListaActiva();

  if (lista.length === 0) {
    spinBtn.textContent = pestañaActiva === 'objetos' ? "🔄 REINICIAR RULETA" : "SIN PARTICIPANTES";
    spinBtn.style.opacity = pestañaActiva === 'objetos' ? "1" : "0.5";
    spinBtn.disabled = pestañaActiva !== 'objetos';
  } else {
    spinBtn.textContent = "¡GIRAR RULETA!";
    if (!estaGirando) {
      spinBtn.disabled = false;
      spinBtn.style.opacity = "1";
    }
  }
}

function dibujarRuleta() {
  if (!ctx || !canvas) return;
  const lista = obtenerListaActiva();
  const total = lista.length;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (total === 0) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = centerX - 10;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#18181c';
    ctx.fill();
    ctx.strokeStyle = '#2a2a32';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#adadb8";
    ctx.font = "bold 16px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(pestañaActiva === 'objetos' ? "Sin objetos restantes" : "Sin participantes de YouTube", centerX, centerY);
    return;
  }

  const arc = (2 * Math.PI) / total;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = centerX - 10;

  lista.forEach((item, index) => {
    const angle = anguloActual + index * arc;
    const colorHex = obtenerColor(index, total);

    ctx.beginPath();
    ctx.fillStyle = colorHex;
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + arc);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    ctx.strokeStyle = '#0f0f13';
    ctx.lineWidth = 4;
    ctx.stroke();

    const textoMostrar = typeof item === 'object' ? item.nombre : item;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px Inter, sans-serif";
    ctx.fillText(textoMostrar, radius - 30, 5);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(centerX, centerY, 32, 0, 2 * Math.PI);
  ctx.fillStyle = '#0f0f13';
  ctx.fill();
  ctx.strokeStyle = '#2a2a32';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function girarRuleta() {
  const lista = obtenerListaActiva();
  if (lista.length === 0) {
    if (pestañaActiva === 'objetos') reiniciarListaManual();
    return;
  }

  if (estaGirando) return;

  estaGirando = true;
  if (spinBtn) {
    spinBtn.disabled = true;
    spinBtn.style.opacity = "0.5";
  }

  const girosCompletos = 5 + Math.floor(Math.random() * 5);
  const anguloAdicional = Math.random() * (2 * Math.PI);
  const anguloObjetivo = anguloActual + (girosCompletos * 2 * Math.PI) + anguloAdicional;
  
  const duracionTotal = 5000;
  const tiempoInicio = performance.now();
  const anguloInicial = anguloActual;

  function animar(tiempoActual) {
    const tiempoTranscurrido = tiempoActual - tiempoInicio;
    const progreso = Math.min(tiempoTranscurrido / duracionTotal, 1);
    const factorDesaceleracion = 1 - Math.pow(1 - progreso, 3);
    
    anguloActual = anguloInicial + (anguloObjetivo - anguloInicial) * factorDesaceleracion;
    dibujarRuleta();

    if (progreso < 1) {
      requestAnimationFrame(animar);
    } else {
      finalizarGiro();
    }
  }

  requestAnimationFrame(animar);
}

function finalizarGiro() {
  estaGirando = false;
  actualizarEstadoBotonGirar();

  const lista = obtenerListaActiva();
  const total = lista.length;
  if (total === 0) return;

  const arc = (2 * Math.PI) / total;
  const anguloPuntero = (3 * Math.PI) / 2;
  const anguloNormalizado = (anguloPuntero - (anguloActual % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
  const indiceGanador = Math.floor(anguloNormalizado / arc);
  ganadorActual = lista[indiceGanador];

  mostrarModalGanador(ganadorActual);
}

// ==========================================
// 5. CONTROL DEL MODAL Y EVENTOS DE BOTONES
// ==========================================
const modalGanador = document.getElementById('modalGanador');
const modalImg = document.getElementById('modalImg');
const modalNombre = document.getElementById('modalNombre');
const modalCategory = document.getElementById('modalCategory');
const btnEliminarItem = document.getElementById('btnEliminarItem');
const btnCerrarModal = document.getElementById('btnCerrarModal');
const btnResetHeader = document.getElementById('btnResetHeader');

function mostrarModalGanador(item) {
  if (!modalGanador || !item) return;
  
  const esObjeto = typeof item === 'object';
  modalNombre.textContent = esObjeto ? item.nombre : item;
  
  // Renderizar la imagen del ganador
  if (esObjeto && item.imagen) {
    modalImg.src = item.imagen;
    modalImg.style.display = 'block';
  } else {
    modalImg.style.display = 'none';
  }

  // Renderizar la categoría en el Modal
  if (modalCategory) {
    if (esObjeto && item.categoria) {
      const catTexto = item.categoria;
      const catClass = `badge-${catTexto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
      
      modalCategory.textContent = catTexto;
      modalCategory.className = `item-category ${catClass}`;
      modalCategory.style.display = 'inline-block';
    } else {
      modalCategory.style.display = 'none';
    }
  }
  
  modalGanador.classList.remove('hidden');
}

function ocultarModal() {
  if (modalGanador) modalGanador.classList.add('hidden');
}

if (btnCerrarModal) {
  btnCerrarModal.addEventListener('click', ocultarModal);
}

if (btnEliminarItem) {
  btnEliminarItem.addEventListener('click', () => {
    if (ganadorActual) {
      if (pestañaActiva === 'objetos') {
        objetosRuleta = objetosRuleta.filter(item => item.id !== ganadorActual.id);
      } else {
        youtubeRuleta = youtubeRuleta.filter(user => user !== ganadorActual);
      }
      guardarYActualizar();
    }
    ocultarModal();
  });
}

if (btnResetHeader) {
  btnResetHeader.addEventListener('click', reiniciarListaManual);
}

if (spinBtn) {
  spinBtn.addEventListener('click', girarRuleta);
}

document.addEventListener('DOMContentLoaded', () => {
  guardarYActualizar();
});

guardarYActualizar();