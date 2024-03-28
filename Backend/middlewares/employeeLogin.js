import Employees from "../models/BankingModels/employee.js";

export const authenticateEmployee = async (req, res, next) => {
    const { employeeId, password } = req.body;
    if (!employeeId || !password) {
        return res.status(400).json({ message: "Employee ID and password are required." });
    }

    try {
        const employee = await Employees.findOne({ employeeId: employeeId, password: password });
        if (!employee) {
            return res.status(401).json({ message: "Invalid employee credentials." });
        }
        // Store employee details in request object for further use
        req.employee = employee;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error during employee authentication:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

