const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");



// register
router.post("/register", async (req, res) => {
    try {
        const { Name, CompanyName, WorkEmail, Password } = req.body;
        console.log(req.body);

        const result = await controller.SP("cms", {
            Name,
            CompanyName,
            WorkEmail,
            Password,
            Action: "REGISTER",
        });
        res.json({ message: "User registered successfully", data: result.recordset });
    } catch (error) {
        console.error("Registration failed:", error.message);
        res.status(500).json({ error: error.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { WorkEmail, Password } = req.body;
        const result = await controller.SP("cms", {
            Action: "LOGIN",
            WorkEmail,
            Password
        })
        if (result.recordset.length === 0) {
            return res.status(401).json({ error: "Invalid Email or Password" });
        }
        res.json({ message: "Login successful", data: result.recordset[0] });
    } catch (error) {
        console.error("Login failed:", error.message);
        res.status(500).json({ error: error.message });
    }
})


module.exports = router;