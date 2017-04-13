const pg = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: 'NODE1603',
    user: 'postgres',
    password: 'khoapham'
};

const pool = new pg.Pool(config);


function query(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(err);
        client.query(sql, (errQuery, result) => {
            if (errQuery) return cb(errQuery);
            cb(undefined, result);
        });
    });
}

function getAllData(cb) {
    const sql = 'SELECT * FROM "TinTuc"';
    query(sql, (err, result) => {
        if (err) return cb(err);
        cb(undefined, result);
    });
}

function insertNews(title, desc, image, idVideo) {

}

function deleteNews(id) {

}

function updateNews(id, title, desc, image, idVideo) {

}

// class Tin {
//     constructor(id, title, desc, image, idVideo) {

//     }

//     remove() {

//     }

//     static getAll() {

//     }
// }

getAllData((err, result) => console.log(result.rows));