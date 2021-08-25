const mysql = require("mysql2");

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "users"
});

con.query('SELECT * FROM user_table', (err, rows)=>{
	if(err) throw err;
	console.log('Data received from Db:\n');
	console.log(rows);
});

con.connect(err => {
	if(err) throw err;
	console.log("Connected successfully!");
});

module.exports = con;
