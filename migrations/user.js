const { user } = require('../app/model/user')

//Mensinkronasikan tabel user
user.sync({ force: false, alter: true })
.then(function(){
    console.log('Table User berhasil dibuat')
    return
})
.catch(function(){
    console.log('Tabel User gagal dibuat')
    return
})