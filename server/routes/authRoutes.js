

const express = require("express")
const router = express.Router();

const {login } = require("../controllers/authCotroller")

router.post("/login", login)

module.exports = router;