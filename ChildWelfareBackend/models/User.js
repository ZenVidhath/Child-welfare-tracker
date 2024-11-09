const pool = require('../config/db');

class User {
    static async createUser(data) {
        const { username, password_hash, role, agency_id } = data;
        const [result] = await pool.execute(
            `INSERT INTO Users (username, password_hash, role, agency_id)
             VALUES (?, ?, ?, ?)`,
            [username, password_hash, role, agency_id]
        );
        return result;
    }
}

module.exports = User;
