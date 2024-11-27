import {Router} from "express";
import { methodsLote as loteController } from "../controller/lote.controller.js";
import validatorHandler from "../../middlewares/validator.handler.js";
import {
  getLoteSchema,
  createLoteSchema,
  updateLoteSchema,
} from "../../schemas/lote.schema.js";
import passport from "passport";
import { checkRoles } from "../../middlewares/auth.handler.js";

const router = Router();

router.get("/", loteController.getLotes);

router.get(
  "/seccion-lotes",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  (req, res) => {
    res.render("admin/seccionLotes", { layout: "./layouts/layoutAdmin" });
  }
);

router.get('/agregar-lote',
    passport.authenticate("jwt", { session: false }),
    checkRoles("admin"),
    (req, res) => {
        res.render("admin/agregarLote", { layout: "./layouts/layoutAdmin" });
      }
)

router.get(
  "/:idLote",
  validatorHandler(getLoteSchema, "params"),
  loteController.getLote
);

router.post(
  "/crear-lote",
  validatorHandler(createLoteSchema, "body"),
  loteController.createLote
);

router.delete("/delete/:idLote", loteController.deleteLote);

router.patch(
  "/update/:idLote",
  validatorHandler(getLoteSchema, "params"),
  validatorHandler(updateLoteSchema, "body"),
  loteController.updateLote
);

export default router;
