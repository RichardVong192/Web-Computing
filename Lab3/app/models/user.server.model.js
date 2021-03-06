// Import the database config file and d the following instructions.

const db = require('../../config/db');

exports.getAll = async function(){

    const connection = await db.getPool().getConnection();
    const q = 'SELECT * FROM lab2_users';
    const [rows, fields] = await connection.query(q);
    return rows;

};

exports.getOne = async function(userId){
    const connection = await db.getPool().getConnection();
    const q = 'SELECT * FROM lab2_users WHERE user_id = ?';
    const [rows, _] = await connection.query(q, userId);
    return rows;
};

exports.insert = async function(username){
    let values = [username];
    const connection = await db.getPool().getConnection();
    const q = 'INSERT INTO lab2_users (username) VALUES ?';
    const [result, _] = await connection.query(q, values);
    console.log(`Inserted user with is ${result.insertId}`);
    return result.insertId;
};

exports.alter = async function(username, userId){
    let values = [username, userId];
    const connection = await db.getPool().getConnection();
    const q = 'update lab2_users set username = ? where user_id = ?';
    const [result, _] = await connection.query(q, values);
    console.log(`Altered user with ${result}`);
    return result.insertId;
};

exports.remove = async function(userId){
    let values = [userId]
    const connection = await db.getPool().getConnection();
    const q = 'DELETE FROM lab2_users WHERE user_id = ?';
    const [result, _] = await connection.query(q, values);
    console.log(`Deleted user with ${result}`);
    return result;
};