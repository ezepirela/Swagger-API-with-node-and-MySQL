const postService = require('../services/posts');

const controllers = {
    addPost: (req, res, next) => {
        const { description, imagePath, addedByUserId } = req.body;
        const data = {
            description,
            imagePath,
            addedByUserId,
        };
        postService.addPost(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(200).send({success: 1, data: results});
        })
    },
}
module.exports = controllers;