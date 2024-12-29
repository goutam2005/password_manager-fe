import { Sequelize } from 'sequelize';
const db = new Sequelize("Password_Manager", "root", null, {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: true,
    port: 8806
});


export default db;
