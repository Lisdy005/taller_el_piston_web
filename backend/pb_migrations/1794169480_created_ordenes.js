/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_3873800767",
        "help": "",
        "hidden": false,
        "id": "relation2194564263",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "vehiculos",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "help": "",
        "hidden": false,
        "id": "relation3528597114",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "mecanico",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "help": "",
        "hidden": false,
        "id": "date2309940515",
        "max": "",
        "min": "",
        "name": "fecha_entrada",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "convertURLs": false,
        "help": "",
        "hidden": false,
        "id": "editor955665117",
        "maxSize": 0,
        "name": "problema_reportado",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
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
      },
      {
        "help": "",
        "hidden": false,
        "id": "number2088685282",
        "max": null,
        "min": null,
        "name": "total_mano_obra",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "help": "",
        "hidden": false,
        "id": "number4223729984",
        "max": null,
        "min": null,
        "name": "total_repuestos",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "help": "",
        "hidden": false,
        "id": "number742108127",
        "max": null,
        "min": null,
        "name": "monto_pagado",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3299786656",
    "indexes": [],
    "listRule": null,
    "name": "ordenes",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3299786656");

  return app.delete(collection);
})
