const msssql = require("mssql");

// const config = {
//     user: "SA",
//     password: "Rento280101",
//     server: "localhost",
//     database: "RentoDB",
//     options: {
//         enableArithAbort: true,
//     },
// };

const config = {
    user: "rentoadmin",
    password: "Rento280101",
    server: "rento.database.windows.net",
    database: "rento",
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





//azure
//rentoadmin
//Rento280101

//connnection string 
//Server=tcp:rento.database.windows.net,1433;Initial Catalog=rento;Persist Security Info=False;User ID=rentoadmin;Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;