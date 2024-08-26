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

module.exports = { createRequest };