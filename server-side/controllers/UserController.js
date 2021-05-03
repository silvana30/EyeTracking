'use strict'

var mongoose = require('mongoose')
var User = mongoose.model('Users')
var express = require('express')
var route = express.Router()

function listUsers(req, res) {
    User.find({}, function(error, users) {
        if (error)
            res.send(error);
        console.log( "LIST USERS: ", users);
        res.json(users);
    })
} 

function insertUser(req, res) {
    console.log("NEW USER: ", req.body)

    var newUser = new User(req.body)
    newUser.save(function(error, user) {
        if (error) {
            console.log("INSERT USER error", error)
        } 
            res.json(user)
             
    });
};

module.exports = {
    listUsers,
    insertUser
}