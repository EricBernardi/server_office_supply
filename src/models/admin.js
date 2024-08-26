const { poolPromise } = require('../config/db');

async function getRequests(filters) {
    try {
        const pool = await poolPromise;
        let query = 'SELECT * FROM Requests WHERE 1=1';

        if (filters.requesterName) {
            query += ` AND requesterName = '${filters.requesterName}'`;
        }
        if (filters.status) {
            query += ` AND status LIKE '%${filters.status}%'`;
        }
        if (filters.description) {
            query += ` AND description LIKE '%${filters.description}%'`;
        }

        const result = await pool.request().query(query);
        return result.recordset;
    } catch (err) {
        throw err;
    }
}

module.exports = { getRequests };