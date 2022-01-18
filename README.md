# SportID - Mini Project SYNRGY Academy
## Deskripsi
Pada mini proyek ini tim kami akan membuat sebuah produk berbasis web yang bertujuan untuk untuk mempermudah masyarakat yang memiliki hobi olahraga dan ingin melihat berita seputar olahraga di Indonesia.   
## Cara Instalasi
   1. Clone this repository to your local computer
   2. Install all dependencies

   ```markdown
   npm install
   ```

   3. Create database

   ```markdown
   sequelize db:create
   ```

   4. Migrate database schema

   ```markdown
   sequelize db:migrate
   ```

   5. Seed data dummy

   ```markdown
   sequelize db:seed:all
   ```

   6. Run this application

   ```markdown
   npm start
   ```
## Cara Penggunaan 

   1. Register
   -  Masukkan email dan nomor HP yang ingin didaftarkan
   -  Masukkan kata sandi untuk keamanan akun Anda
   -  Centang syarat dan ketentuan, lalu klik register
   -  Anda telah memiliki akun Sport ID
   
   2. Log In / Masuk Akun
            
   -  Pada halaman utama, pilih “Log In” pada pojok kanan atas
   -  Masukkan email atau nomor hp yang telah didaftarkan, lalu masukkan kata sandi yang benar
   -  Klik “Log In”
   -  Anda sudah masuk dengan akun Sport ID
                
   3. Ubah Profil
   -  Pada halaman home, pilih menu profile yang terdapat nama akun anda pada pojok kanan atas
   -  Klik tombol panah ke bawah, lalu pilihlah menu ubah profile
   -  Pada halaman ubah profile terdapat tampilan data profile anda seperti nama akun, email, dan nomor HP
   -  Anda dapat mengubah data profile anda dengan mengklik form yang ada data diri anda
   -  Kemudian setelah data profile anda telah dirubah, pilih button simpan perubahan
   -  Selamat, data profile anda telah berubah
                            
   4. Komentar     
   -  Pada laman berita, klik icon komentar 
   -  Laman akan scroll otomatis pada bagian komentar
   -  Anda dapat menulis komentar pada berita tersebut

   5. Laporkan Berita
   -  Pada sebuah berita, pilih “Laporkan Berita”
   -  Silahkan pilih atau beri alasan mengapa Anda melaporkan berita tersebut
   -  Jika sudah, klik “Laporkan”
   -  Lalu pilih “Yakin” jika Anda sudah yakin dengan laporan ini
   -  Laporan Anda terkirim
   -  Sport ID akan memproses laporan tersebut dan mengambil tindakan lebih lanjut untuk meningkatkan pengalaman membaca yang lebih baik
   
## Fitur-fitur yang terdapat pada web SportID

   1. Register : 
      Fitur ini digunakan untuk membuat akun
   2. Login :
      Fitur ini digunakan untuk masuk ke dalam web dengan memasukkan email dan password.
   3. Halaman Utama :
      Merupakan halaman depan website yang berisi informasi berita dari mulai berita trending, terbaru dan edukasi olahraga
   4. News Detail :
      Fitur ini berisi tampilan isi dari berita. Kemudian terdapat berita terkait, dan fitur komentar
   5. Komentar :
      Fitur ini digunakan untuk memberi komentar pada berita
   6. Halaman Kategori  :
      Merupakan halaman kategori yang menampilkan kategori sesuai kategori yang dipilih
   7. Fitur Mode Gelap  :
      Fitur ini digunakan untuk menampilkan latar belakang web menjadi gelap agar pengguna nyaman dalam membaca berita
   8. Halaman Ubah Profil  :
      Merupakan halaman untuk menampilkan profil yang sudah didaftarkan pada saat register dan berisi tentang data pribadi
   9. Dashboard  :
      Merupakan halaman yang menampilkan list berita dan fitur untuk membuat berita, memperbarui berita, dan menghapus berita
   10. Halaman Tentang Kami  :
       Merupakan halaman seputar pengenalan tentang aplikasi berbasis web SportID
   11. Halaman Pusat Bantuan  :
       Merupakan halaman untuk menampilkan informasi bantuan dalam penggunaan web SportID
   12. Halaman Kebijakan dan Privasi  :
       Merupakan halaman untuk menampilkan informasi seputar kebijakan dan privasi dalam penggunaan web SportID
   13. Fitur Laporkan Berita  :
       Fitur ini digunakan untuk melaporkan berita yang kurang pantas untuk ditayangkan di web SportID
   14. Fitur Reset Password :
       Fitur ini digunakan untuk melakukan reset password jika user lupa terhadap password nya