/// <reference path="../pb_data/types.d.ts" />

// Vista SQL: un renglon por proyecto con cuantas tareas tiene y cuantas estan hechas.
// LEFT JOIN para que los proyectos sin tareas aparezcan con 0.
migrate((app) => {
  const resumen = new Collection({
    type: "view",
    name: "resumen_proyectos",
    viewQuery: `
      SELECT
        p.id AS id,
        p.nombre AS nombre,
        COUNT(t.id) AS total,
        COUNT(CASE WHEN t.estado = 'hecha' THEN 1 END) AS hechas
      FROM proyectos p
      LEFT JOIN tareas t ON t.proyecto = p.id
      GROUP BY p.id, p.nombre
    `,
    // La vista no tiene la columna owner, asi que la regla busca el proyecto original con @collection.
    listRule:
      '@request.auth.id != "" && @collection.proyectos.id ?= id && (@collection.proyectos.owner ?= @request.auth.id || @collection.proyectos.miembros.id ?= @request.auth.id)',
    viewRule:
      '@request.auth.id != "" && @collection.proyectos.id ?= id && (@collection.proyectos.owner ?= @request.auth.id || @collection.proyectos.miembros.id ?= @request.auth.id)',
  });

  return app.save(resumen);
}, (app) => {
  app.delete(app.findCollectionByNameOrId("resumen_proyectos"));
});
