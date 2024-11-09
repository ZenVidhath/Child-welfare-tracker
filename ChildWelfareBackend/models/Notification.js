const pool = require('../config/db');

class Notification {
    static async createNotification(data) {
        const { message, user_id, child_id } = data;
        const [result] = await pool.execute(
            `INSERT INTO Notifications (message, user_id, child_id)
             VALUES (?, ?, ?)`,
            [message, user_id, child_id]
        );
        return result;
    }
}

module.exports = Notification;
