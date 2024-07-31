const { createPool } = require("mysql");
const catchAsync = require("./utils/catchAsync");
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Hager@1999',
    database: 'SOUND_SAGE',
    connectionLimit: 100
});

exports.signUp = catchAsync(async (req, res, next) => {
    console.log(req.query);
    pool.query(`INSERT INTO users (name, email, password) VALUES (\'` + req.query.name + `\', \'` + req.query.email + `\', \'` + req.query.password + `\');`, (err, result, fields) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json("account added successfully");
        }
    });
});

exports.logIn = catchAsync(async (req, res, next) => {
    pool.query(`SELECT * FROM users WHERE email = \'` + req.query.email + `\';`, (err, result, fields) => {
        if (err) {
            res.status(400).json(err);
        } else if (result.length === 0 || result[0].password != req.query.password) {
            res.status(401).json("wrong email or password");
        } else
            res.status(200).json("access granted");
    });
});

exports.recommend = catchAsync(async (req, res, next) => {
});

exports.addToFavorities = catchAsync(async (req, res, next) => {
    pool.query(`INSERT INTO favorites (user_id, song) VALUES (\'` + req.query.id + `\', \'` + req.query.song + `\');`, (err, result, fields) => {
        if (err) {
            res.status(400).json(err);
        } else
            res.status(200).json("added successfully");
    });
});

exports.getFavorities = catchAsync(async (req, res, next) => {
    pool.query(`SELECT * FROM favorites WHERE user_id = ` + req.query.id + `;`, (err, result, fields) => {
        if (err) {
            res.status(400).json(err);
        } else
            res.status(200).json(result);
    });
});

exports.removeToFavorities = catchAsync(async (req, res, next) => {
    
});