/// <reference path="../pb_data/types.d.ts" />

// Datos de prueba para la clase: 2 usuarios, 3 proyectos y 8 tareas.
// Es idempotente: si un registro ya existe, se reutiliza y no se duplica.
// Contrasena de todos los usuarios de prueba: 1234567890
migrate((app) => {
  const users = app.findCollectionByNameOrId("users");
  const proyectos = app.findCollectionByNameOrId("proyectos");
  const tareas = app.findCollectionByNameOrId("tareas");

  // Busca un usuario por email; si no existe, lo crea ya verificado.
  const usuario = (email, nombre) => {
    try {
      return app.findAuthRecordByEmail("users", email);
    } catch (_) {
      const u = new Record(users);
      u.setEmail(email);
      u.setPassword("1234567890");
      u.setVerified(true);
      u.set("nombre", nombre);
      app.save(u);
      return u;
    }
  };

  // El nombre de proyecto es UNIQUE, asi que sirve como clave de busqueda.
  const proyecto = (datos) => {
    try {
      return app.findFirstRecordByData("proyectos", "nombre", datos.nombre);
    } catch (_) {
      const p = new Record(proyectos, datos);
      app.save(p);
      return p;
    }
  };

  const tarea = (datos) => {
    try {
      return app.findFirstRecordByFilter("tareas", "titulo = {:titulo}", { titulo: datos.titulo });
    } catch (_) {
      const t = new Record(tareas, datos);
      app.save(t);
      return t;
    }
  };

  const ana = usuario("ana@ejemplo.cu", "Ana");
  const luis = usuario("luis@ejemplo.cu", "Luis");

  // Ana es owner de dos proyectos; Luis es miembro del primero.
  const web = proyecto({
    nombre: "Pagina Web Ana",
    descripcion: "<p>Sitio web del curso.</p>",
    color: "azul",
    activo: true,
    presupuesto: 1500,
    fecha_limite: "2026-12-31 00:00:00.000Z",
    owner: ana.id,
    miembros: [luis.id],
  });

  const movil = proyecto({
    nombre: "App Movil Ana",
    descripcion: "<p>Prototipo de app movil.</p>",
    color: "verde",
    activo: true,
    presupuesto: 800,
    owner: ana.id,
  });

  // Luis es owner de su propio proyecto.
  const inventario = proyecto({
    nombre: "Inventario Luis",
    descripcion: "<p>Control de stock.</p>",
    color: "rojo",
    activo: true,
    presupuesto: 300,
    owner: luis.id,
  });

  // 8 tareas con estados, prioridades y etiquetas variados.
  tarea({
    titulo: "Crear maqueta del inicio",
    descripcion: "Primera version de la pagina de inicio",
    estado: "pendiente",
    prioridad: 5,
    etiquetas: ["diseno", "urgente"],
    vencimiento: "2026-11-15 00:00:00.000Z",
    completada: false,
    proyecto: web.id,
    asignado: ana.id,
  });

  tarea({
    titulo: "Escribir textos de la seccion nosotros",
    estado: "en_progreso",
    prioridad: 3,
    etiquetas: ["contenido"],
    completada: false,
    proyecto: web.id,
    asignado: luis.id,
  });

  tarea({
    titulo: "Optimizar imagenes",
    estado: "hecha",
    prioridad: 2,
    etiquetas: ["rendimiento", "urgente"],
    completada: true,
    proyecto: web.id,
    asignado: ana.id,
  });

  tarea({
    titulo: "Configurar hosting",
    estado: "pendiente",
    prioridad: 4,
    etiquetas: ["devops", "urgente"],
    contacto: "soporte@ejemplo.cu",
    enlace: "https://ejemplo.cu/hosting",
    completada: false,
    proyecto: web.id,
    asignado: luis.id,
  });

  tarea({
    titulo: "Disenar pantalla de login",
    estado: "pendiente",
    prioridad: 3,
    etiquetas: ["ui", "login"],
    completada: false,
    proyecto: movil.id,
    asignado: ana.id,
  });

  tarea({
    titulo: "Probar en Android",
    estado: "en_progreso",
    prioridad: 4,
    etiquetas: ["qa"],
    completada: false,
    proyecto: movil.id,
  });

  tarea({
    titulo: "Publicar en tiendas",
    estado: "pendiente",
    prioridad: 1,
    etiquetas: ["release"],
    vencimiento: "2026-12-20 00:00:00.000Z",
    completada: false,
    proyecto: movil.id,
  });

  tarea({
    titulo: "Revisar stock del almacen",
    estado: "hecha",
    prioridad: 2,
    etiquetas: ["stock"],
    completada: true,
    proyecto: inventario.id,
    asignado: luis.id,
  });
});
