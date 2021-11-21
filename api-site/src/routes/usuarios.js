var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/contatar", function (req, res) {
    usuarioController.contatar(req, res);
});

router.post("/novoemail", function (req, res) {
    usuarioController.novoemail(req, res);
});
router.post("/novasenha", function (req, res) {
    usuarioController.novasenha(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cancelarusuario", function (req, res) {
    usuarioController.cancelarusuario(req, res);
});
router.post("/usuariosCadastrados", function (req, res) {
    usuarioController.usuariosCadastrados(req, res);
});
router.get("/usuariosGeneroF", function (req, res) {
    usuarioController.usuariosGeneroF(req, res);
});
router.get("/usuariosGeneroM", function (req, res) {
    usuarioController.usuariosGeneroM(req, res);
});
router.get("/usuariosIdade", function (req, res) {
    usuarioController.usuariosIdade(req, res);
});

module.exports = router;