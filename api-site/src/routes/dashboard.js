var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function (req, res) {
    dashboardController.testar(req, res);
});
router.get("/usuariosCadastrados", function (req, res) {
    dashboardController.usuariosCadastrados(req, res);
});
router.get("/usuariosGeneroF", function (req, res) {
    dashboardController.usuariosGeneroF(req, res);
});
router.get("/usuariosGeneroM", function (req, res) {
    dashboardController.usuariosGeneroM(req, res);
});
router.get("/usuariosIdade", function (req, res) {
    dashboardController.usuariosIdade(req, res);
});

module.exports = router;