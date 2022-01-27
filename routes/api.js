// import Patient Controller
const Patientcontroller = require("../controllers/PatientController");
// import express
const express = require("express");

// buat routing modular 
const router = express.Router();

// definisikan routing
router.get("/", function(req, res) {
    res.send("Hello World");
});

// Routing untuk patients
router.get("/patients", Patientcontroller.index);
router.post("/patients", Patientcontroller.store);
router.put("/patients/:id", Patientcontroller.update);
router.delete("/patients/:id", Patientcontroller.destroy);
router.get("/patients/:id", Patientcontroller.show);
router.get("/patients/search/:name", Patientcontroller.search);
router.get("/patients/status/:status", Patientcontroller.searchBYStatus);

// export
module.exports = router;