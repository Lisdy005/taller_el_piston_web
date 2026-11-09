/// <reference path="../pb_data/types.d.ts" />

// Coleccion base "proyectos". Un proyecto tiene un dueno (owner) y varios miembros.
migrate((app) => {
  const users = app.findCollectionByNameOrId("users");

  const proyectos = new Collection({
    type: "base",
    name: "proyectos",
    fields: [
      { name: "nombre", type: "text", required: true, min: 3, max: 100 },
      { name: "descripcion", type: "editor" },
      { name: "color", type: "select", values: ["rojo", "verde", "azul"], maxSelect: 1 },
      { name: "activo", type: "bool" },
      { name: "presupuesto", type: "number", min: 0 },
      { name: "fecha_limite", type: "date" },
      // owner: un solo usuario. miembros: varios usuarios (maximo 100).
      { name: "owner", type: "relation", required: true, collectionId: users.id, maxSelect: 1, cascadeDelete: false },
      { name: "miembros", type: "relation", collectionId: users.id, maxSelect: 100, cascadeDelete: false },
    ],
    // Indice UNIQUE: no pueden existir dos proyectos con el mismo nombre.
    indexes: ["CREATE UNIQUE INDEX idx_proyectos_nombre ON proyectos (nombre)"],
    // Solo el owner o un miembro ve el proyecto. Solo un usuario logueado puede crear,
    // y solo puede crear proyectos a su nombre (owner = el mismo).
    listRule: '@request.auth.id != "" && (owner = @request.auth.id || miembros.id ?= @request.auth.id)',
    viewRule: '@request.auth.id != "" && (owner = @request.auth.id || miembros.id ?= @request.auth.id)',
    createRule: '@request.auth.id != "" && @request.body.owner = @request.auth.id',
    updateRule: "owner = @request.auth.id",
    deleteRule: "owner = @request.auth.id",
  });

  return app.save(proyectos);
}, (app) => {
  app.delete(app.findCollectionByNameOrId("proyectos"));
});
