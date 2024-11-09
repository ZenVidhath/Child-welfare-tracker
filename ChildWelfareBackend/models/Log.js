const pool = require('../config/db');

class Log {
    static async createLog(data) {
        const { action, user_id, child_id } = data;
        const [result] = await pool.execute(
            `INSERT INTO Logs (action, user_id, child_id)
             VALUES (?, ?, ?)`,
            [action, user_id, child_id]
        );
        return result;
    }
}

module.exports = Log;
