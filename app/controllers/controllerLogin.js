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
          [Op.or]: [{email: req.body.email}, {phoneNumber: req.body.email}]
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
                res.status(200).render("successLogin.ejs", {token}); 
              }
            }
          )
        } else {
          admin.findOne({
            where: {
              [Op.or]: [{email: req.body.email}, {nomorHp: req.body.email}]
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
                    res.status(200).render("successLogin.ejs", {token}); 
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