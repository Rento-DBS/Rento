const msssql = require("mssql");

const config = {
    user: "SA",
    password: "Rento280101",
    server: "localhost",
    database: "TutorialDB",
    options: {
        enableArithAbort: true,
    },
};

const pool = new msssql.ConnectionPool(config);

pool.connect().then(() => {
    console.log("Connected to database..");
});

async function executeQuery(query) {
    let result = {
        error: null,
        message: null,
        data: [],
    };
    await pool
        .query(query)
        .then((res) => {
            (result.error = 0),
                (result.message = "Query executed successfully"),
                (result.data = res.recordset);
        })
        .catch((err) => {
            (result.error = 1), (result.message = err.message);
            console.error(err.message);
        });
    return result;
}

module.exports = { executeQuery };
