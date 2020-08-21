module.exports = {
    client: "sqlite3", // specifying the DBMS
    useNullAsDefault: true, // a flag that's required for SQLite
    connection: {
        filename: "./data/produce.db3", // location of our database file
    },
    // we can now make migration files
}