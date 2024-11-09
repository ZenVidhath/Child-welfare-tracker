const pool = require('../config/db');

class Child {
    static async createChild(data) {
        const { first_name, last_name, date_of_birth, description, last_seen_date, last_seen_location, reported_by } = data;
        const [result] = await pool.execute(
            `INSERT INTO Children (first_name, last_name, date_of_birth, description, last_seen_date, last_seen_location, reported_by)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [first_name, last_name, date_of_birth, description, last_seen_date, last_seen_location, reported_by]
        );
        return result;
    }

    static async getUnfoundChildren() {
        const [rows] = await pool.query('SELECT * FROM Children WHERE found = 0');
        return rows;
    }
}

module.exports = Child;
