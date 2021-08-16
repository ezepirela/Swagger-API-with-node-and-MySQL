const db    =   require('../db.config');

exports.register = (data, callback) => {
    db.query(
        `INSERT INTO users (firstname, lastname, emailId, password) VALUES (?, ?, ?, ?)`,
        [data.firstname, data.lastname, data.emailId, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, 'Registration succesfull');
        }
    );
};
exports.login = (data, callback) => {
    db.query(
        `SELECT id FROM users WHERE emailId = ? AND password = ?`,
        [data.emailId, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            else if(results.length > 0){
                return callback(null, "Login succesfull")
            }else {
                return callback('Invalid credentials');
            }
            
        }
    )
}