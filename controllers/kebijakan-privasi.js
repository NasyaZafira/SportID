function kebijakanPrivasi(req, res) {
    res.render("pages/kebijakan-privasi", {loggedName: req.session.userName, loggedNameAdmin: req.session.adminName})
}

module.exports = { kebijakanPrivasi }