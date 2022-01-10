const router = require("express").Router();
const controllerLogin = require("../controller/controllerLogin");

router.get("/login", controllerLogin.getLogin);
router.post("/login", controllerLogin.postLogin);

module.exports = router;