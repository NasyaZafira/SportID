function tentangKami (req, res) {
    res.render("pages/tentangKami", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName})
  }

module.exports = { tentangKami }