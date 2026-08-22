const express = require("express");
const router = express.Router();

const { createLead, getlead, updateLeadStatus, deleteLead } = require("../controllers/leadController");
 router.post("/", createLead);
 router.get("/", getlead)
 router.put("/:id", updateLeadStatus)
router.delete("/:id",deleteLead)

 module.exports = router;