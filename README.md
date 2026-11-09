# Sistema de Gestión para Taller Automotriz "El Pistón" 
**Asignatura:** Programación Web  
**Estudiante:** Lisdania Diaz 

---

## 1. Decisiones de Diseño y Arquitectura
- **Arquitectura SPA (Single Page Application):** Desarrollada con HTML5, CSS3 y JavaScript Vanilla para garantizar un rendimiento fluido, transiciones instantáneas entre vistas y una experiencia de usuario (UX/UI) moderna sin recargas de página
- **Resiliencia de Datos (Mock & API):** Diseñado para interactuar mediante `fetch` con un servidor REST de **PocketBase**, incorporando un adaptador de datos de demostración robusto para evitar fallas durante la demostración o defensa en vivo
- **Modelo Relacional (PocketBase):** Estructurado bajo colecciones relacionales estrictas (`clientes`, `vehiculos`, `ordenes`, `users` y `repuestos`) para mantener la integridad referencial y cumplir con el ciclo de vida del taller (*recibida, en diagnóstico, en reparación, lista, entregada o cancelada*) 
- **Gestión Gerencial ("Lo que el dueño necesita saber"):**
  - Control de órdenes abiertas y sus estados en tiempo real 
  - Métrica de carga de trabajo por mecánico 
  - Historial de servicios detallado por cliente y vehículo
  - Control de saldos pendientes de cobro 
  - Alertas automáticas de inventario crítico ($	ext{existencias} \le 5$) 
  - Reporte y filtrado de facturación 

---

## 2. Esquema de Colecciones en PocketBase
Para levantar el servidor backend, cree las siguientes colecciones en su instancia de PocketBase (`http://127.0.0.1:8090/`):
1. **`clientes`**: `nombre` (text), `telefono` (text), `direccion` (text).
2. **`vehiculos`**: `cliente_id` (relation -> clientes), `matricula` (text), `marca` (text), `modelo` (text), `anio` (number), `kilometraje` (number).
3. **`users` (Mecánicos)**: Gestión integrada de usuarios o colección personalizada con campo `nombre` y `especialidad`.
4. **`repuestos`**: `nombre` (text), `codigo` (text), `precio_venta` (number), `existencias` (number).
5. **`ordenes`**: `vehiculo_id` (relation -> vehiculos), `mecanico_id` (relation -> users), `fecha_entrada` (date), `problema_reportado` (text), `estado` (select: recibida, en_diagnostico, en_reparacion, lista, entregada, cancelada), `total_mano_obra` (number), `total_repuestos` (number), `monto_pagado` (number).

---

## 3. Instrucciones de Ejecución
1. Descargue o clone el repositorio.
2. Inicie el servidor PocketBase dentro de la carpeta `backend/`:
   ```bash
   ./pocketbase serve
   ```
3. Abra el archivo `frontend/index.html` en su navegador web o sírvalo mediante un entorno local (Live Server).
