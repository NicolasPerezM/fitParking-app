import { Router } from "express";
import { methods as usuariosController } from "../controller/usuarios.controller.js";
import validatorHandler from "../../middlewares/validator.handler.js";
import {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} from "../../schemas/usuarios.schema.js";
import passport from "passport";
import { checkRoles } from "../../middlewares/auth.handler.js";

const router = Router();

router.get("/", usuariosController.getUsers);

router.get(
  "/seccion-usuarios",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  (req, res) => {
    res.render("admin/usuarios", { layout: "./layouts/layoutAdmin" });
  }
);

router.get(
  "/dashboardAdmin",
  passport.authenticate("jwt", { session: false }),
  checkRoles("admin"),
  (req, res) => {
    res.render("admin/dashboardAdmin", { layout: "./layouts/layoutAdmin" });
  }
);

router.get(
  "/dashboardUser",
  passport.authenticate("jwt", { session: false }),
  checkRoles("usuario"),
  (req, res) => {
    res.render("dashboardUser", { layout: "./layouts/layoutUser" });
  }
);

router.get("/crearUsuario", (req, res) => {
  res.render("crearUsuario", { layout: "./layouts/sidebar" });
});

router.get(
  "/:idUsuario",
  validatorHandler(getUserSchema, "params"),
  usuariosController.getUserById
);

router.post(
  "/crearUsuario",
  validatorHandler(createUserSchema, "body"),
  usuariosController.createUser
);

router.delete("/delete/:idUsuario", usuariosController.deleteUser);

router.patch(
  "/update/:idUsuario",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  usuariosController.updateUser
);

export default router;
