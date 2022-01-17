function pusatBantuan (req, res) {
    res.render("pages/pusat-bantuan", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName})
  }

module.exports = { 
    pusatBantuan 
}
