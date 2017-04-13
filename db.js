const pg = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: 'NODE1603',
    user: 'postgres',
    password: 'khoapham'
};

const pool = new pg.Pool(config);

pool.connect((err, client, done) => {
    if (err) return console.log('LOI: ', err);
    client.query('SELECT * FROM "TinTuc"', (errQuery, result) => {
        if (errQuery) return console.log(errQuery);
        console.log(result);
    });
});
