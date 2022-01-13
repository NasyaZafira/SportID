const { user } = require("../models/index");
const { admin } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { password } = require("pg/lib/defaults");
const { Op } = require("sequelize");

module.exports = {
  getLogin(req, res) {
    res.render("login.ejs");
  },
  postLogin(req, res) {
      user.findOne({
        where: {
          [Op.or]: [{email: req.body.username}, {phoneNumber: req.body.username}]
        },
      })
      .then(function(data) {
        if(data) {
          bcrypt.compare(
            req.body.password,
            data.password,
            function(err, result) {
              if(result) {
                const token = jwt.sign({data}, 'pass');
                console.log("Berhasil Login")
                res.redirect("/"); 
              }
            }
          )
        } else {
          admin.findOne({
            where: {
              [Op.or]: [{email: req.body.username}, {nomorHp: req.body.username}]
            },
          })
          .then(function(dataadm) {
            if(dataadm) {
              bcrypt.compare(
                req.body.password,
                dataadm.password,
                function(err, result) {
                  if(result) {
                    const token = jwt.sign({dataadm}, 'pass');
                    console.log("Berhasil Login") 
                    res.redirect('/admin');
                  }
                }
              )
            }
            else {
              res.status(500).json("Email atau Phone Number Salah");
              }
          })
        }
      })
    }
  }