import { DataTypes } from 'sequelize';
import db from '../db/mysql.js';

const PasswordManager = db.define("PasswordManager", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Fixed typo
        primaryKey: true,
        autoIncrement: true,
    },
    URL: {
        type: DataTypes.STRING,
        allowNull: false, // Fixed typo
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // Fixed typo
    }
}, {
    tableName: "password_manager", // Ensures the table name matches your database
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
});

export default PasswordManager;
