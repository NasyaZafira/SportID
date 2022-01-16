function tentangKami (req, res) {
    res.render("pages/tentang-kami", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName})
  }

module.exports = { tentangKami }
