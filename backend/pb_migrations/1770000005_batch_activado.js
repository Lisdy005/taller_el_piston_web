/// <reference path="../pb_data/types.d.ts" />

// Activa la API batch (POST /api/batch). En PocketBase 0.35 viene desactivada por defecto.
migrate((app) => {
  const settings = app.settings();
  settings.batch.enabled = true;

  return app.save(settings);
}, (app) => {
  const settings = app.settings();
  settings.batch.enabled = false;

  return app.save(settings);
});
