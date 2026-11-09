/// <reference path="../pb_data/types.d.ts" />

// Agrega nombre y avatar a la coleccion "users" (auth), que PocketBase crea por defecto.
// Las reglas de users no se tocan.
migrate((app) => {
  const users = app.findCollectionByNameOrId("users");

  users.fields.add(new TextField({ name: "nombre" }));
  users.fields.add(new FileField({
    name: "avatar",
    maxSelect: 1,
    mimeTypes: ["image/png", "image/jpeg"],
    thumbs: ["100x100"],
  }));

  return app.save(users);
}, (app) => {
  const users = app.findCollectionByNameOrId("users");

  users.fields.removeByName("nombre");
  users.fields.removeByName("avatar");

  return app.save(users);
});
