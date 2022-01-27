// import model
const Patient = require("../models/Patient");

// buat Class Patient Controller
class PatientController {
    async index(req, res) {
        const patient = await Patient.all();

        if (patient[0]) {
            const data = {
                message: "Get All Resource",
                data: patient,
            };
            
            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data is empty",
            };

            res.status(404).json(data);
        }
    }

    async store(req, res) {
        const patient = await Patient.create(req.body);

        const { name } = req.body;

        const data = {
            message: "Resource is added successfully " + name,
            data: patient,
        };

        res.status(201).json(data);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.params;
        const patient = await Patient.find(id);

        if (patient[0]) {
            const patient = await Patient.update(id, req.body);
            const data = {
                message: "Resource id " + id + "name " + name + "is update successfully ", 
                data: patient,
            };
    
            res.status(200).json(data);
        }
        else {
            const data = {
                message : "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const patient = await Patient.delete(id);
            const data = {
                message: "Resource is delete successfully " + id,
                data: patient,
            };
    
            res.json(data);
        }
        else {
            const data = {
                message : "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            const data = {
                message: "Get Detail Resource " + id,
                data: patient,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message : "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async search(req, res) {
        const { name } = req.params;
        const patient = await Patient.search(name);

        if (patient) {
            const data = {
                message: "Get searched resource " + name,
                data: patient,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message : "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async searchBYStatus(req, res) {
        const { status } = req.params;
        const patient = await Patient.SBS(status);

        if (patient) {
            const data = {
                message: "Get " + status + " Resource",
                data: patient,
            };
    
            res.status(200).json(data)
        }
        else {
            const data = {
                message: "Get " + status + " Resource",
            };
    
            res.status(404).json(data)
        }
    }
}

// buat object
const object = new PatientController();

// export
module.exports = object;