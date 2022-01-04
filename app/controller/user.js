const res = require('express/lib/response')
const db = require('../models/index')



// Menampilkan Form Edit
const showEditUser = async (req, res) => {
    const {id} = await req.params;
    const User = await db.user.findOne({
        where: {
            id: id
        },
        raw: true
    }).catch(error => console.error(error))
    
    //Mencantumkan halaman Profile
    res.render('halamanProfile', {
        title: 'Mengubah User',
        User
    })
}

// Melakukan Edit User
const editUser = async (req, res) => {
    const {id} = req.params
    const {name, email, phoneNumber, password} = req.body;

    const data = await db.user.update({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    }, {
      where: {
        id: id
      }
    })
    if(!data){
        res.status(400).json({
            message: 'data gagal di update',
            type: 'danger'
        })
        return
    }

    res.status(200).redirect('/')
}

module.exports = {
    showEditUser,
    editUser
}