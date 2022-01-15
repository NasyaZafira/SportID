function tentangKami (req, res) {
  res.render("pages/tentang-Kami", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName})
}
module.exports = { tentangKami }
