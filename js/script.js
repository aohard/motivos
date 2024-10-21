// Definir las opciones disponibles para la segunda lista según la selección de la primera lista
const opciones = {
    administrativa: [
        { valor: "desconoce_activacion", texto: "Desconoce activación" },
        { valor: "fallecimiento", texto: "Fallecimiento" },
        { valor: "fin_promo", texto: "Fin de promo" },
        { valor: "mala_atencion", texto: "Mala atención" },
        { valor: "no_informa_motivo", texto: "No informa motivo" },
        { valor: "no_lo_usa", texto: "No lo usa" },
        { valor: "no_cumple_condiciones_vta", texto: "No se cumplen condiciones vta" },
        { valor: "problema_facturacion", texto: "Problema con la facturación" },
        { valor: "problemas_economicos", texto: "Problemas económicos" }
    ],
    instalacion: [
        { valor: "demora_agenda_instalacion", texto: "Demora Agenda Instalación" },
        { valor: "disconforme_instalacion", texto: "Disconforme con instalación" },
        { valor: "vt_incumplida_instalacion", texto: "VT Incumplida Instalación" }
    ],
    economicos: [
        { valor: "aumento_abono", texto: "Aumento Abono" },
        { valor: "bloqueo_bonificacion", texto: "Bloqueo Bonificación" },
        { valor: "mejor_oferta_competencia", texto: "Mejor oferta pasa competencia" },
        { valor: "negocios_cierre_negocio", texto: "NEGOCIOS - Cierre de Negocio" },
        { valor: "no_puede_abonar", texto: "No puede abonar" },
        { valor: "reclama_promo_cliente_nuevo", texto: "Reclama Promo Cliente Nuevo" }
    ],
    mudanza: [
        { valor: "armado_edificio", texto: "Armado de edificio" },
    { valor: "casa_sin_habitar", texto: "Casa o Dto sin habitar" },
    { valor: "demora_agenda", texto: "Demora en Agenda" },
    { valor: "inmueble_serv_competencia", texto: "Inmueble con serv competencia" },
    { valor: "inmueble_telecentro", texto: "Inmueble con Telecentro" },
    { valor: "no_acepta_traslado", texto: "No acepta traslado" },
    { valor: "vt_incumplida_mudanza", texto: "VT Incumplida Mudanza" },
    { valor: "zona_sin_red_telecentro", texto: "Zona sin red Telecentro" }
    ],
    tecnicos: [
        { valor: "cortes_servicio_reiterados", texto: "Cortes de servicio reiterados" },
        { valor: "demora_agenda", texto: "Demora en Agenda" },
        { valor: "demora_reparacion", texto: "Demora en Reparación" },
        { valor: "ticket_supera_plazo", texto: "Ticket supera Plazo" },
        { valor: "vt_incumplida", texto: "VT Incumplida" },
        { valor: "vt_no_brinda_solucion", texto: "VT no brinda solución" }
    ]
};

// Función para actualizar la segunda lista desplegable según la opción seleccionada en la primera lista
function actualizarLista2() {
    // Obtener la referencia a las listas desplegables
    const lista1 = document.getElementById("lista1");
    const lista2 = document.getElementById("lista2");

    // Obtener la selección actual de la primera lista
    const seleccion = lista1.value;

    // Limpiar las opciones actuales de la segunda lista
    lista2.innerHTML = ""; // Limpiar todas las opciones previas

    // Agregar la opción por defecto "Seleccionar..."
    const opcionPorDefecto = document.createElement("option");
    opcionPorDefecto.value = "";
    opcionPorDefecto.textContent = "Seleccionar...";
    lista2.appendChild(opcionPorDefecto);

    // Verificar si la selección tiene opciones disponibles en el objeto 'opciones'
    if (opciones[seleccion]) {
        // Recorrer cada opción de la selección y añadirla a la segunda lista desplegable
        opciones[seleccion].forEach(opcion => {
            const nuevoElemento = document.createElement("option");
            nuevoElemento.value = opcion.valor;
            nuevoElemento.textContent = opcion.texto;
            lista2.appendChild(nuevoElemento);
        });
    }
}

// Asociar la función `actualizarLista2` al evento `change` de la primera lista
document.addEventListener("DOMContentLoaded", function() {
    const lista1 = document.getElementById("lista1");
    lista1.addEventListener("change", actualizarLista2);
});
