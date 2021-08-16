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
    getAllPost: (req, res, next) => {
        const data = {};
        postService.getAllPost(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(200).send({success: 1, data: results});
        })
    },
    addPostComment: (req, res, next) => {
        const { postId, comment, addedByUserId } = req.body;
        const data = {
            postId,
            comment,
            addedByUserId
        };
        postService.addPostComment(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(200).send({success: 1, data: results});
        })
    },
    getAllComments: (req, res, next) => {
        const {postId} = req.query
        const data = {postId};
        postService.getAllComments(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(200).send({success: 1, data: results});
        })
    }
}
module.exports = controllers;