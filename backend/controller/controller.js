// const db = require("../database/db");
// const mssql = require("mssql");


// exports.SP = async (spName, json) => {
//     try {
//         let sql = "exec " + spName + " ";
//         Object.keys(json).forEach((key) => {
//             sql += " @" + key + "='" + json[key] + "',";
//         });
//         sql = sql.substring(0, sql.lastIndexOf(","));
//         console.log("Executing SQL:", sql);

//         const pool = await mssql.connect(db.config);
//         const result = await pool.request().query(sql);

//         return result;
//     } catch (error) {
//         console.error("Error executing stored procedure:", error);
//         throw error;
//     }
// };



const { poolPromise } = require("../database/db");

async function SP(spName, inputObj) {
    try {
        const pool = await poolPromise;
        const request = pool.request();

        for (let key in inputObj) {
            request.input(key, inputObj[key]);
        }

        const result = await request.execute(spName); // e.g., 'dbo.cms'
        return result;
    } catch (err) {
        console.error("Error executing stored procedure:", err);
        throw err;
    }
}

module.exports = { SP };
