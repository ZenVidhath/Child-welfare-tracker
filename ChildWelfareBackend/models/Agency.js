const pool = require('../config/db');

class Agency {
    static async createAgency(data) {
        const { agency_name, contact_info, address } = data;
        const [result] = await pool.execute(
            `INSERT INTO Agencies (agency_name, contact_info, address)
             VALUES (?, ?, ?)`,
            [agency_name, contact_info, address]
        );
        return result;
    }
}

module.exports = Agency;
