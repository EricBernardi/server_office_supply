const { sql, poolPromise } = require('../config/db');

async function updateRequestStatus(request) {
    try {
        console.log('TESTE', request)
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

module.exports = { updateRequestStatus };