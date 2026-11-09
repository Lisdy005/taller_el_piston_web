/// <reference path="../pb_data/types.d.ts" />

// Ruta publica: muestra como leer un parametro de la URL con pathValue.
routerAdd("GET", "/api/hola/{nombre}", (e) => {
  return e.json(200, { mensaje: "Hola " + e.request.pathValue("nombre") });
});

// Conteo de tareas por estado. Solo owner o miembro ve el proyecto: si no, responde 404
// para no revelar que existe. El filtro usa las mismas reglas de acceso de proyectos.
routerAdd("GET", "/api/proyectos/{id}/estadisticas", (e) => {
  const id = e.request.pathValue("id");

  try {
    $app.findFirstRecordByFilter("proyectos", "id = {:id} && (owner = {:uid} || miembros ?= {:uid})", {
      id: id,
      uid: e.auth.id,
    });
  } catch (_) {
    throw new NotFoundError("Proyecto no encontrado");
  }

  const contar = (estado) => $app.countRecords("tareas", $dbx.hashExp({ proyecto: id, estado: estado }));

  return e.json(200, {
    total: $app.countRecords("tareas", $dbx.hashExp({ proyecto: id })),
    pendiente: contar("pendiente"),
    en_progreso: contar("en_progreso"),
    hecha: contar("hecha"),
  });
}, $apis.requireAuth());

// Antes de guardar: si no llega estado, la tarea nace como pendiente.
// Tambien rechaza el titulo "test" para mostrar un error 400 creado desde un hook.
onRecordCreateRequest((e) => {
  if (!e.record.getString("estado")) {
    e.record.set("estado", "pendiente");
  }
  if (e.record.getString("titulo") === "test") {
    throw new BadRequestError("El titulo 'test' no esta permitido");
  }
  e.next();
}, "tareas");

// Despues de guardar: solo registra en el log cuando la tarea pasa a completada.
// No cambia datos, asi se evita un bucle de updates encadenados.
onRecordAfterUpdateSuccess((e) => {
  if (e.record.getBool("completada") && !e.record.original().getBool("completada")) {
    $app.logger().info("Tarea completada", "id", e.record.id, "titulo", e.record.getString("titulo"));
  }
  e.next();
}, "tareas");
