const { sql, poolPromise } = require('../config/db');

async function createRequest(request) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('requesterName', sql.VarChar, request.requesterName)
            .input('description', sql.Text, request.description)
            .input('price', sql.Real, request.price)
            .query(`INSERT INTO Requests (RequesterName, Description, Price)
                    OUTPUT INSERTED.*
                    VALUES (@requesterName, @description, @price)`);
        console.log(result);
        return result.recordset;
    } catch (err) {
        throw err;
    }
}

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

async function updateRequestStatus(request) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, request.id)
            .input('status', sql.VarChar, request.status)
            .input('observations', sql.Text, request.observations)
            .query(`UPDATE Requests SET Status = @status, Observations = @observations 
                OUTPUT INSERTED.* WHERE Id = @id`);
        return result.recordset;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createRequest,
    getRequests,
    updateRequestStatus
};