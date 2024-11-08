import Router from "express";
import { methodsHistorialParqueo as historialParqueoController } from "../controller/historialParqueo.controller.js";
import validatorHandler from "../../middlewares/validator.handler.js";
import {
  createHistorialParqueoSchema,
  getHistorialParqueoSchema,
} from "../../schemas/historialParqueo.schema.js";
import passport from "passport";
import { checkRoles } from "../../middlewares/auth.handler.js";

const router = Router();

router.get("/", historialParqueoController.getHistorialParqueo);

router.get(
    "/noRegistrado",
    passport.authenticate("jwt", { session: false }),
    checkRoles("admin"),
    (req, res) => {
      console.log("entro");
      res.render("admin/agregarNoRegistrado", {
        layout: "./layouts/layoutAdmin",
      });
    }
  );

router.get(
  "/:idHistorialParqueo",
  validatorHandler(getHistorialParqueoSchema, "params"),
  historialParqueoController.getHistorialParqueoById
);

router.post(
  "/crearHistorialParqueo",
  passport.authenticate("jwt", { session: false }), //verifica que el usuario este autenticado
  checkRoles("admin"), //verifica que el rol sea admin
  validatorHandler(createHistorialParqueoSchema, "body"),
  historialParqueoController.createHistorialParqueo
);

router.delete(
  "/delete/:idHistorialParqueo",
  historialParqueoController.deleteHistorialParqueo
);

export default router;
