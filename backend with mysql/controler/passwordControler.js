import Password_manager from '../models/password.js';
const create = async (req, res) => {
    try {
        // Extract and validate input
        const { URL, password } = req.body;

        if (!URL || !password) {
            return res.status(400).json({ error: "URL and password are required." });
        }

        // Create a new user entry in the database
        const user = await Password_manager.create({ URL, password });

        // Respond with the created user
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const read = async (req, res) => {
    try {
        const users = await Password_manager.findAll();
        res.json(users);
    } catch (error) {
        console.error("Error reading users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from the route params
        const { URL, password } = req.body; // Extract URL and password from the request body

        // Validate input
        if (!URL || !password) {
            return res.status(400).json({ error: "URL and password are required." });
        }

        // Update the record in the database
        const [updatedRows] = await Password_manager.update(
            { URL, password },
            { where: { id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ error: "User not found." });
        }

        // Fetch and return the updated record
        const updatedUser = await Password_manager.findByPk(id);
        res.status(200).json({updatedUser,  message: "User updated successfully." });
    } catch (error) {
        console.error("Error updating user:", error);

        // Return a proper error response
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const deletePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Password_manager.destroy({ where: { id } });
        if (deletedRows === 0) {
            return res.status(404).json({ error: "User not found." });
        }
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export { create, read ,update, deletePassword};