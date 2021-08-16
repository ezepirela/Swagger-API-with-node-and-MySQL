const db    =   require('../config/db.config');
exports.addPost = (data, callback) =>{
    db.query(`INSERT INTO posts (description, imagePath, dateTimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
    [data.description, data.imagePath, new Date(), data.addedByUserId],
    (error, results, fields) => {
        if(error){
            return callback(error);
        }
        return callback(null, 'post added succesfully')
    })
}
exports.getAllPost = (data, callback) => {
    db.query(`SELECT p.id AS postId, p.description, p.dateTimeCreated, 
    p.likeCount, p.dislikeCount, p.addedByUserId, u.firstname, u.lastname
    FROM posts as p INNER JOIN users AS u ON p.addedByUserId = u.id`, [],
    (error, results, fields) => {
        if(error){
            console.log(error);
            return callback(error);
        }
        return callback(null, results);
    });
}
exports.addPostComment = (data, callback) => {
    db.query(`INSERT INTO comments (postId, comment, dateTimeCreated, addedByUserId) VALUES (?, ?, ?, ?)`,
    [data.postId, data.comment, new Date(), data.addedByUserId],
    (error, results, fields) => {
        if(error){
            return callback(error);
        }
        return callback(null, 'Comment added succesfully')
    })
}
exports.getAllComments = (data, callback) => {
    db.query(`SELECT c.comment, c.dateTimeCreated, c.addedByUserId, u.firstname, u.lastname
    FROM comments AS c INNER JOIN users AS u ON c.addedByUserId = u.id where c.postId = ?`, 
    [data.postId],
    (error, results, fields) => {
        if(error){
            console.log(error);
            return callback(error);
        }
        return callback(null, results);
    })
}