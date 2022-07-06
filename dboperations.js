var config = require('./dbconfig');
const sql = require('mssql');

async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from users");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getOrders: getOrders
}