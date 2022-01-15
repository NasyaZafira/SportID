const { user } = require("../models/index");
const { admin } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { password } = require("pg/lib/defaults");
const { Op } = require("sequelize");

module.exports = {
  getLogin(req, res) {
    res.render("pages/login", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName});
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
                req.session.userName = data.name
                req.session.loggedUser = data
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
                    req.session.adminName = dataadm.name
                    req.session.loggedAdmin = dataadm
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