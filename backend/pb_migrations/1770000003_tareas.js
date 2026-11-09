/// <reference path="../pb_data/types.d.ts" />

// Coleccion base "tareas". Cada tarea pertenece a un proyecto.
// El acceso se hereda del proyecto: owner o miembro del proyecto.
migrate((app) => {
  const users = app.findCollectionByNameOrId("users");
  const proyectos = app.findCollectionByNameOrId("proyectos");

  const tareas = new Collection({
    type: "base",
    name: "tareas",
    fields: [
      { name: "titulo", type: "text", required: true },
      { name: "descripcion", type: "text" },
      { name: "estado", type: "select", values: ["pendiente", "en_progreso", "hecha"], maxSelect: 1 },
      { name: "prioridad", type: "number", min: 1, max: 5, onlyInt: true },
      { name: "etiquetas", type: "json" },
      { name: "enlace", type: "url" },
      { name: "contacto", type: "email" },
      { name: "vencimiento", type: "date" },
      { name: "completada", type: "bool" },
      // Si se borra el proyecto, se borran sus tareas.
      { name: "proyecto", type: "relation", required: true, collectionId: proyectos.id, maxSelect: 1, cascadeDelete: true },
      { name: "asignado", type: "relation", collectionId: users.id, maxSelect: 1, cascadeDelete: false },
      {
        name: "adjuntos",
        type: "file",
        maxSelect: 5,
        maxSize: 5242880,
        mimeTypes: ["image/png", "image/jpeg", "application/pdf"],
        thumbs: ["100x100", "300x0"],
      },
    ],
    indexes: [
      "CREATE INDEX idx_tareas_proyecto ON tareas (proyecto)",
      "CREATE INDEX idx_tareas_estado ON tareas (estado)",
    ],
    // Acceso de lectura y borrado: usuario logueado que es owner o miembro del proyecto de la tarea.
    listRule: '@request.auth.id != "" && (proyecto.owner = @request.auth.id || proyecto.miembros.id ?= @request.auth.id)',
    viewRule: '@request.auth.id != "" && (proyecto.owner = @request.auth.id || proyecto.miembros.id ?= @request.auth.id)',
    // Crear: el proyecto indicado en el body debe ser del usuario (owner o miembro).
    createRule:
      '@request.auth.id != "" && @collection.proyectos.id ?= @request.body.proyecto && (@collection.proyectos.owner ?= @request.auth.id || @collection.proyectos.miembros.id ?= @request.auth.id)',
    // Editar: el owner puede todo. Un miembro puede editar, pero no cambiar el campo proyecto.
    updateRule:
      '@request.auth.id != "" && (proyecto.owner = @request.auth.id || (proyecto.miembros.id ?= @request.auth.id && (@request.body.proyecto:isset = false || @request.body.proyecto = proyecto)))',
    deleteRule: '@request.auth.id != "" && (proyecto.owner = @request.auth.id || proyecto.miembros.id ?= @request.auth.id)',
  });

  return app.save(tareas);
}, (app) => {
  app.delete(app.findCollectionByNameOrId("tareas"));
});
