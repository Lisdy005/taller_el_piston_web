const API_URL = 'http://127.0.0.1:8090/api/collections/ordenes/records';

const demoMecanicos = [
    { id: 'mec-1', nombre: 'Carlos Fernández', especialidad: 'Mecánico General y Suspensión' },
    { id: 'mec-2', nombre: 'Roberto Gómez', especialidad: 'Especialista Frenos, Motor e Inyección' }
];

const demoVehiculos = [
    { id: 'v-1', matricula: 'P-123456', marca: 'Toyota', modelo: 'Corolla', anio: 2018, kilometraje: 75000, cliente_nombre: 'Carlos Pérez' },
    { id: 'v-2', matricula: 'H-987654', marca: 'Hyundai', modelo: 'Elantra', anio: 2020, kilometraje: 42000, cliente_nombre: 'Ana Gómez' },
    { id: 'v-3', matricula: 'B-456789', marca: 'Kia', modelo: 'Picanto', anio: 2019, kilometraje: 60000, cliente_nombre: 'Luis Martínez' },
    { id: 'v-4', matricula: 'P-554433', marca: 'Peugeot', modelo: '301', anio: 2021, kilometraje: 31000, cliente_nombre: 'Maria Rodríguez' },
    { id: 'v-5', matricula: 'N-112233', marca: 'Nissan', modelo: 'Sentra', anio: 2017, kilometraje: 95000, cliente_nombre: 'Jorge Hernández' },
    { id: 'v-6', matricula: 'S-998877', marca: 'Suzuki', modelo: 'Vitara', anio: 2022, kilometraje: 18000, cliente_nombre: 'Elena Torres' },
    { id: 'v-7', matricula: 'M-445566', marca: 'Mazda', modelo: 'Mazda 3', anio: 2021, kilometraje: 28000, cliente_nombre: 'Daniel Morales' },
    { id: 'v-8', matricula: 'C-778899', marca: 'Chevrolet', modelo: 'Cruze', anio: 2016, kilometraje: 110000, cliente_nombre: 'Sofía Benítez' },
    { id: 'v-9', matricula: 'F-332211', marca: 'Ford', modelo: 'Focus', anio: 2018, kilometraje: 82000, cliente_nombre: 'Alejandro Ruiz' },
    { id: 'v-10', matricula: 'V-990011', marca: 'Volkswagen', modelo: 'Jetta', anio: 2020, kilometraje: 45000, cliente_nombre: 'Claudia Blanco' }
];

let demoOrdenes = [
    { 
        id: '1', 
        estado: 'en_reparacion', 
        mecanico_nombre: 'Carlos Fernández',
        problema_reportado: 'Cambio de pastillas de freno, alineación y cambio de aceite motor.', 
        total_mano_obra: 90, 
        total_repuestos: 60, 
        monto_pagado: 100, 
        vehiculo_str: 'Toyota Corolla (P-123456)',
        cliente_nombre: 'Carlos Pérez'
    },
    { 
        id: '2', 
        estado: 'recibida', 
        mecanico_nombre: 'Roberto Gómez',
        problema_reportado: 'Ruido extraño en la suspensión delantera derecha al frenar.', 
        total_mano_obra: 40, 
        total_repuestos: 0, 
        monto_pagado: 0, 
        vehiculo_str: 'Hyundai Elantra (H-987654)',
        cliente_nombre: 'Ana Gómez'
    },
    { 
        id: '3', 
        estado: 'lista', 
        mecanico_nombre: 'Carlos Fernández',
        problema_reportado: 'Mantenimiento de los 50,000 km y cambio de bujías.', 
        total_mano_obra: 70, 
        total_repuestos: 30, 
        monto_pagado: 100, 
        vehiculo_str: 'Kia Picanto (B-456789)',
        cliente_nombre: 'Luis Martínez'
    },
    { 
        id: '4', 
        estado: 'en_diagnostico', 
        mecanico_nombre: 'Roberto Gómez',
        problema_reportado: 'Falla eléctrica en las luces principales e inyectores.', 
        total_mano_obra: 50, 
        total_repuestos: 20, 
        monto_pagado: 0, 
        vehiculo_str: 'Peugeot 301 (P-554433)',
        cliente_nombre: 'Maria Rodríguez'
    },
    { 
        id: '5', 
        estado: 'entregada', 
        mecanico_nombre: 'Carlos Fernández',
        problema_reportado: 'Falla en el sistema de aire acondicionado y recarga de gas.', 
        total_mano_obra: 60, 
        total_repuestos: 40, 
        monto_pagado: 100, 
        vehiculo_str: 'Nissan Sentra (N-112233)',
        cliente_nombre: 'Jorge Hernández'
    },
    { 
        id: '6', 
        estado: 'en_reparacion', 
        mecanico_nombre: 'Roberto Gómez',
        problema_reportado: 'Sustitución de kit de embrague y revisión de caja.', 
        total_mano_obra: 120, 
        total_repuestos: 110, 
        monto_pagado: 140, 
        vehiculo_str: 'Suzuki Vitara (S-998877)',
        cliente_nombre: 'Elena Torres'
    },
    { 
        id: '7', 
        estado: 'recibida', 
        mecanico_nombre: 'Carlos Fernández',
        problema_reportado: 'Cambio de correa de distribución y bomba de agua.', 
        total_mano_obra: 150, 
        total_repuestos: 90, 
        monto_pagado: 50, 
        vehiculo_str: 'Mazda Mazda 3 (M-445566)',
        cliente_nombre: 'Daniel Morales'
    },
    { 
        id: '8', 
        estado: 'en_diagnostico', 
        mecanico_nombre: 'Roberto Gómez',
        problema_reportado: 'Pérdida de fuerza en pendientes y revisión general de motor.', 
        total_mano_obra: 80, 
        total_repuestos: 45, 
        monto_pagado: 0, 
        vehiculo_str: 'Chevrolet Cruze (C-778899)',
        cliente_nombre: 'Sofía Benítez'
    },
    { 
        id: '9', 
        estado: 'lista', 
        mecanico_nombre: 'Carlos Fernández',
        problema_reportado: 'Reparación del sistema de escape y silenciador.', 
        total_mano_obra: 65, 
        total_repuestos: 55, 
        monto_pagado: 120, 
        vehiculo_str: 'Ford Focus (F-332211)',
        cliente_nombre: 'Alejandro Ruiz'
    },
    { 
        id: '10', 
        estado: 'entregada', 
        mecanico_nombre: 'Roberto Gómez',
        problema_reportado: 'Cambio de amortiguadores delanteros y cazoletas.', 
        total_mano_obra: 100, 
        total_repuestos: 140, 
        monto_pagado: 240, 
        vehiculo_str: 'Volkswagen Jetta (V-990011)',
        cliente_nombre: 'Claudia Blanco'
    }
];

const demoClientes = [
    { id: 'c1', nombre: 'Carlos Pérez', telefono: '+53 51234567', direccion: 'Calle 23 #45, Vedado' },
    { id: 'c2', nombre: 'Ana Gómez', telefono: '+53 59876543', direccion: 'Ave. 51 #12, Playa' },
    { id: 'c3', nombre: 'Luis Martínez', telefono: '+53 52345678', direccion: 'Calle 10 #102, Miramar' },
    { id: 'c4', nombre: 'Maria Rodríguez', telefono: '+53 54321098', direccion: 'Calle 84 #15, Marianao' },
    { id: 'c5', nombre: 'Jorge Hernández', telefono: '+53 53344556', direccion: 'Calle 100 #23, Boyeros' },
    { id: 'c6', nombre: 'Elena Torres', telefono: '+53 56677889', direccion: 'Ave. 31 #54, Playa' },
    { id: 'c7', nombre: 'Daniel Morales', telefono: '+53 57788990', direccion: 'Calle 14 #202, Vedado' },
    { id: 'c8', nombre: 'Sofía Benítez', telefono: '+53 58899001', direccion: 'Ave. Kohly #19, Nuevo Vedado' },
    { id: 'c9', nombre: 'Alejandro Ruiz', telefono: '+53 59900112', direccion: 'Calle 60 #501, Miramar' },
    { id: 'c10', nombre: 'Claudia Blanco', telefono: '+53 51122334', direccion: 'Calle 1ra #32, Atabey' }
];

const demoRepuestos = [
    { id: 'r1', nombre: 'Pastillas de Freno Delanteras', codigo: 'FR-001', precio_venta: 45.0, existencias: 3 },
    { id: 'r2', nombre: 'Aceite de Motor Sintético 10W40', codigo: 'AC-104', precio_venta: 25.0, existencias: 15 },
    { id: 'r3', nombre: 'Filtro de Aire Universal', codigo: 'FL-202', precio_venta: 15.0, existencias: 2 },
    { id: 'r4', nombre: 'Bujías de Iridio (Juego de 4)', codigo: 'BJ-305', precio_venta: 35.0, existencias: 8 },
    { id: 'r5', nombre: 'Kit de Embrague Completo', codigo: 'EM-404', precio_venta: 110.0, existencias: 1 },
    { id: 'r6', nombre: 'Gas Refrigerante R134a', codigo: 'GR-505', precio_venta: 40.0, existencias: 12 },
    { id: 'r7', nombre: 'Kit de Distribución', codigo: 'DS-606', precio_venta: 90.0, existencias: 4 },
    { id: 'r8', nombre: 'Amortiguadores Delanteros', codigo: 'AM-707', precio_venta: 70.0, existencias: 6 }
];

let ordenSeleccionadaId = null;

function poblarSelectsFormulario() {
    const selectMecanico = document.querySelector('#mecanico-id');
    const selectVehiculo = document.querySelector('#vehiculo-id');

    if (selectMecanico) {
        selectMecanico.innerHTML = '<option value="">-- Seleccione un Mecánico --</option>';
        demoMecanicos.forEach(m => {
            selectMecanico.innerHTML += `<option value="${m.nombre}">${m.nombre} (${m.especialidad})</option>`;
        });
    }

    if (selectVehiculo) {
        selectVehiculo.innerHTML = '<option value="">-- Seleccione un Vehículo --</option>';
        demoVehiculos.forEach(v => {
            selectVehiculo.innerHTML += `<option value="${v.marca} ${v.modelo} (${v.matricula}) - Cliente: ${v.cliente_nombre}">${v.marca} ${v.modelo} [Mat: ${v.matricula}] - ${v.cliente_nombre}</option>`;
        });
    }
}

function cambiarVista(nombreVista) {
    document.querySelectorAll('.vista').forEach(el => el.classList.add('seccion-oculta'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

    const vistaActiva = document.querySelector(`#vista-${nombreVista}`);
    const navActivo = document.querySelector(`#nav-${nombreVista}`);

    if (vistaActiva) vistaActiva.classList.remove('seccion-oculta');
    if (navActivo) navActivo.classList.add('active');

    if (nombreVista === 'inicio') actualizarKPIs();
    if (nombreVista === 'nueva-orden') poblarSelectsFormulario();
    if (nombreVista === 'ordenes') renderizarOrdenes(demoOrdenes);
    if (nombreVista === 'clientes') cargarClientes();
    if (nombreVista === 'mecanicos') cargarMecanicos();
    if (nombreVista === 'repuestos') cargarRepuestos();
}

function actualizarKPIs() {
    const ordenesAbiertas = demoOrdenes.filter(o => o.estado !== 'entregada' && o.estado !== 'cancelada');
    document.querySelector('#kpi-ordenes-cant').textContent = ordenesAbiertas.length;
    document.querySelector('#kpi-stock-cant').textContent = demoRepuestos.filter(r => r.existencias <= 5).length;

    let saldoTotalDeuda = 0;
    let facturacionTotal = 0;
    demoOrdenes.forEach(o => {
        const total = o.total_mano_obra + o.total_repuestos;
        facturacionTotal += o.monto_pagado;
        if (o.estado !== 'cancelada') {
            saldoTotalDeuda += Math.max(0, total - o.monto_pagado);
        }
    });

    document.querySelector('#kpi-saldo-cant').textContent = `$${saldoTotalDeuda}`;
    document.querySelector('#kpi-facturacion-cant').textContent = `$${facturacionTotal}`;
}

function renderizarOrdenes(lista) {
    const contenedor = document.querySelector('#lista-ordenes');
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #475569;">No se encontraron órdenes registradas con los filtros seleccionados.</p>';
        return;
    }

    lista.forEach(o => {
        const total = o.total_mano_obra + o.total_repuestos;
        const pendiente = total - o.monto_pagado;

        contenedor.innerHTML += `
            <div class="tarjeta" onclick="abrirModalDetalle('${o.id}')">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="color:#0f172a; font-size:1.1rem;">${o.vehiculo_str}</strong>
                    <span class="estado-badge">${o.estado}</span>
                </div>
                <p><strong>Cliente:</strong> ${o.cliente_nombre}</p>
                <p><strong>Mecánico Asignado:</strong> ${o.mecanico_nombre}</p>
                <p><strong>Problema:</strong> ${o.problema_reportado}</p>
                <hr style="margin: 10px 0; border: 0; border-top: 1px solid #e2e8f0;">
                <p style="font-size: 0.9rem;"><strong>Total:</strong> $${total} | <span style="color: ${pendiente > 0 ? '#dc2626' : '#059669'}; font-weight:bold;">Pendiente: $${pendiente}</span></p>
            </div>`;
    });
}

function filtrarOrdenes() {
    const texto = document.querySelector('#buscador-ordenes').value.toLowerCase();
    const estadoFiltro = document.querySelector('#filtro-estado').value;

    const filtradas = demoOrdenes.filter(o => {
        const coincideTexto = o.vehiculo_str.toLowerCase().includes(texto) || o.problema_reportado.toLowerCase().includes(texto) || o.mecanico_nombre.toLowerCase().includes(texto) || o.cliente_nombre.toLowerCase().includes(texto);
        const coincideEstado = estadoFiltro === 'todos' || o.estado === estadoFiltro;
        return coincideTexto && coincideEstado;
    });

    renderizarOrdenes(filtradas);
}

function cargarClientes() {
    const contenedor = document.querySelector('#lista-clientes');
    contenedor.innerHTML = '';

    demoClientes.forEach(c => {
        const vehiculosCliente = demoVehiculos.filter(v => v.cliente_nombre === c.nombre);
        const vehiculosStr = vehiculosCliente.map(v => `${v.marca} ${v.modelo} (${v.matricula})`).join(', ') || 'Sin vehículo registrado';

        contenedor.innerHTML += `
            <div class="tarjeta" style="border-left-color: #059669; cursor: pointer;" onclick="verHistorialCliente('${c.nombre}')">
                <h3 style="color: #0f172a; margin-bottom:5px;">👤 ${c.nombre}</h3>
                <p><strong>Teléfono:</strong> ${c.telefono}</p>
                <p><strong>Dirección:</strong> ${c.direccion}</p>
                <p style="margin-top: 8px;"><strong>Vehículos:</strong> ${vehiculosStr}</p>
                <p style="margin-top: 10px; color: #2563eb; font-weight: 600; font-size: 0.9rem;">🔍 Ver historial completo de servicios &rarr;</p>
            </div>`;
    });
}

function verHistorialCliente(nombreCliente) {
    const vehiculos = demoVehiculos.filter(v => v.cliente_nombre === nombreCliente);
    const ordenesCliente = demoOrdenes.filter(o => o.cliente_nombre === nombreCliente);

    document.querySelector('#historial-titulo').textContent = `Historial de Servicios: ${nombreCliente}`;
    
    let html = `<h4 style="margin-bottom: 8px; color: #1e293b;">Vehículos Registrados:</h4>`;
    if (vehiculos.length === 0) {
        html += `<p style="margin-bottom: 15px; color: #64748b;">No hay vehículos registrados.</p>`;
    } else {
        html += `<ul style="margin-bottom: 15px; padding-left: 20px; color: #334155;">`;
        vehiculos.forEach(v => {
            html += `<li><strong>${v.marca} ${v.modelo}</strong> (${v.matricula}) - Año: ${v.anio}, Km: ${v.kilometraje}</li>`;
        });
        html += `</ul>`;
    }

    html += `<h4 style="margin-bottom: 8px; color: #1e293b;">Órdenes de Servicio Históricas:</h4>`;
    if (ordenesCliente.length === 0) {
        html += `<p style="color: #64748b;">No registra órdenes de servicio previas.</p>`;
    } else {
        ordenesCliente.forEach(o => {
            const total = o.total_mano_obra + o.total_repuestos;
            const pendiente = total - o.monto_pagado;
            html += `
                <div style="background: #f8fafc; padding: 12px; border-radius: 8px; margin-bottom: 10px; border: 1px solid #e2e8f0;">
                    <p><strong>Vehículo:</strong> ${o.vehiculo_str} | <span class="estado-badge">${o.estado}</span></p>
                    <p><strong>Problema:</strong> ${o.problema_reportado}</p>
                    <p><strong>Mecánico:</strong> ${o.mecanico_nombre}</p>
                    <p><strong>Costo Total:</strong> $${total} | <span style="color: ${pendiente > 0 ? '#dc2626' : '#059669'}; font-weight:bold;">Pendiente: $${pendiente}</span></p>
                </div>`;
        });
    }

    document.querySelector('#historial-body').innerHTML = html;
    document.querySelector('#modal-historial').classList.remove('seccion-oculta');
}

function cerrarModalHistorial() {
    document.querySelector('#modal-historial').classList.add('seccion-oculta');
}

function cargarMecanicos() {
    const contenedor = document.querySelector('#lista-mecanicos');
    contenedor.innerHTML = '';

    demoMecanicos.forEach(m => {
        const ordenesMecanico = demoOrdenes.filter(o => o.mecanico_nombre === m.nombre && o.estado !== 'entregada' && o.estado !== 'cancelada');
        
        contenedor.innerHTML += `
            <div class="tarjeta" style="border-left-color: #2563eb;">
                <h3 style="color: #0f172a; margin-bottom:5px;">👨‍🔧 ${m.nombre}</h3>
                <p><strong>Especialidad:</strong> ${m.especialidad}</p>
                <hr style="margin: 10px 0; border: 0; border-top: 1px solid #e2e8f0;">
                <p><strong>Órdenes Activas Asignadas:</strong> <span style="font-size: 1.2rem; color: #2563eb; font-weight: bold;">${ordenesMecanico.length}</span></p>
                <div style="margin-top: 10px;">
                    ${ordenesMecanico.length === 0 ? '<p style="color: #64748b; font-size: 0.9rem;">Sin carga pendiente en este momento.</p>' : ordenesMecanico.map(o => `<p style="font-size: 0.85rem; background: #f1f5f9; padding: 4px 8px; border-radius: 4px; margin-top: 4px;">• ${o.vehiculo_str} (${o.estado})</p>`).join('')}
                </div>
            </div>`;
    });
}

function cargarRepuestos() {
    const contenedor = document.querySelector('#lista-repuestos');
    contenedor.innerHTML = '';
    demoRepuestos.forEach(r => {
        const stockBajo = r.existencias <= 5;
        contenedor.innerHTML += `
            <div class="tarjeta" style="border-left-color: ${stockBajo ? '#dc2626' : '#2563eb'};">
                <h3 style="color: #0f172a; margin-bottom:5px;">${r.nombre}</h3>
                <p><strong>Código:</strong> ${r.codigo} | <strong>Precio:</strong> $${r.precio_venta}</p>
                <p style="margin-top:8px;">
                    <strong>Existencias:</strong> <span style="color: ${stockBajo ? '#dc2626' : '#0f172a'}; font-weight:bold;">${r.existencias} unidades</span>
                    ${stockBajo ? '<br><span style="color: #dc2626; font-size:0.85rem; font-weight:bold;">⚠️ ¡Stock crítico! Requiere compra urgente.</span>' : ''}
                </p>
            </div>`;
    });
}

function abrirModalDetalle(idOrden) {
    ordenSeleccionadaId = idOrden;
    const orden = demoOrdenes.find(o => o.id === idOrden);
    if (!orden) return;

    const total = orden.total_mano_obra + orden.total_repuestos;
    const pendiente = total - orden.monto_pagado;

    document.querySelector('#modal-body').innerHTML = `
        <p><strong>Cliente:</strong> ${orden.cliente_nombre}</p>
        <p><strong>Vehículo:</strong> ${orden.vehiculo_str}</p>
        <p><strong>Estado Actual:</strong> <span class="estado-badge">${orden.estado}</span></p>
        <p><strong>Mecánico Asignado:</strong> ${orden.mecanico_nombre}</p>
        <p><strong>Falla Reportada:</strong> ${orden.problema_reportado}</p>
        <p><strong>Costo Mano de Obra:</strong> $${orden.total_mano_obra}</p>
        <p><strong>Costo Repuestos:</strong> $${orden.total_repuestos}</p>
        <p><strong>Monto Pagado:</strong> $${orden.monto_pagado}</p>
        <p><strong>Saldo Pendiente:</strong> <span style="color: ${pendiente > 0 ? '#dc2626' : '#059669'}; font-weight:bold;">$${pendiente}</span></p>
    `;
    document.querySelector('#nuevo-estado').value = orden.estado;
    document.querySelector('#modal-detalle').classList.remove('seccion-oculta');
}

function cerrarModal() {
    document.querySelector('#modal-detalle').classList.add('seccion-oculta');
}

function guardarCambioEstado() {
    const nuevoEstado = document.querySelector('#nuevo-estado').value;
    const orden = demoOrdenes.find(o => o.id === ordenSeleccionadaId);
    if (orden) {
        orden.estado = nuevoEstado;
        alert(`¡Estado de la orden actualizado a "${nuevoEstado}" con éxito!`);
        cerrarModal();
        renderizarOrdenes(demoOrdenes);
        actualizarKPIs();
    }
}

async function crearOrden(evento) {
    evento.preventDefault();
    const vehiculoVal = document.querySelector('#vehiculo-id').value;
    const mecanicoVal = document.querySelector('#mecanico-id').value;
    const problemaVal = document.querySelector('#problema').value.trim();
    const manoObraVal = parseFloat(document.querySelector('#mano-obra').value) || 50;
    const montoPagadoVal = parseFloat(document.querySelector('#monto-pagado').value) || 0;
    const alertaDiv = document.querySelector('#mensaje-alerta-form');

    if (!vehiculoVal || !mecanicoVal) {
        alertaDiv.textContent = '⚠️ Por favor, seleccione tanto el vehículo como el mecánico asignado.';
        alertaDiv.classList.remove('seccion-oculta');
        return;
    }

    if (problemaVal.length < 10) {
        alertaDiv.textContent = '⚠️ La descripción del problema debe contener al menos 10 caracteres explicativos.';
        alertaDiv.classList.remove('seccion-oculta');
        return;
    }

    alertaDiv.classList.add('seccion-oculta');

    const vehiculoNombre = vehiculoVal.split(' - ')[0];
    const clienteNombre = vehiculoVal.split(' - Cliente: ')[1] || 'Cliente General';

    const nuevaOrdenObj = {
        id: String(demoOrdenes.length + 1),
        estado: 'recibida',
        mecanico_nombre: mecanicoVal,
        problema_reportado: problemaVal,
        total_mano_obra: manoObraVal,
        total_repuestos: 0,
        monto_pagado: montoPagadoVal,
        vehiculo_str: vehiculoNombre,
        cliente_nombre: clienteNombre
    };

    demoOrdenes.unshift(nuevaOrdenObj);
    alert('¡Orden de servicio registrada con éxito!');
    document.querySelector('#form-orden').reset();
    cambiarVista('ordenes');
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarKPIs();
    poblarSelectsFormulario();
    const form = document.querySelector('#form-orden');
    if (form) form.addEventListener('submit', crearOrden);
});
