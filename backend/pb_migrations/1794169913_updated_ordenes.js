/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3299786656")

  // update field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select643686883",
    "maxSelect": 0,
    "name": "estado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "recibida",
      "diagnostico",
      "reparacion",
      "lista",
      "entrega",
      "cancelada"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3299786656")

  // update field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "select643686883",
    "maxSelect": 0,
    "name": "estado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "recibida, diagnostico, reparacion, lista, entrega, cancelada"
    ]
  }))

  return app.save(collection)
})
