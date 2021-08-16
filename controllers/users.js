const userService = require('../services/users');

const controller = {
    register: (req, res, next) => {
        const { firstname, lastname, emailId, password } = req.body
        const data = {
            firstname,
            lastname,
            emailId,
            password
        };
        userService.register(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(201).send({success: 1, data: results});
        });
    },
    login: (req, res, next) => {
        const { emailId, password } = req.body;
        const data = {
            emailId,
            password
        };
        userService.login(data, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).send({success: 0, data: 'Bad request'});
            }
            return res.status(200).send({sucess: 1, data: results});
        });
    },
};


module.exports = controller;