// const mssql = require("mssql");
// const dotenv = require("dotenv");
// dotenv.config()


// const dbconfig = {
//     server: process.env.server,
//     database: process.env.database_name,
//     user: process.env.user,
//     password: process.env.password,
//     options: {
//         encrypt: false,
//         trustServerCertificate: true
//     }
// }


// const db = mssql.connect(dbconfig, (err) => {
//     if (err) throw err;
//     else console.log("Database Is Connected");
// })

// module.exports = db;

const mssql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

const dbconfig = {
    server: process.env.server,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const poolPromise = mssql.connect(dbconfig)
    .then(pool => {
        console.log("✅ Database is connected");
        return pool.request().query("SELECT DB_NAME() AS DBName").then(result => {
            console.log("👉 Connected to DB:", result.recordset[0].DBName);
            return pool;
        });
    })
    .catch(err => {
        console.error("❌ DB Connection failed:", err.message);
    });

module.exports = {
    sql: mssql,
    poolPromise
};

