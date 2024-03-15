## HACKTIXID

Buatlah sebuah website bernama `HACKTIXID` dimana pengguna dapat melihat movie yang ada dan memasukannya kedalam watchlist.  

&nbsp;

## Summary 

```txt
- Architecture : Client - Server
- Server : Node.js - ExpressJs + Sequelize
- Client : ReactJs (vite, react-router, redux)
  - Buatlah tampilan semirip mungkin dengan menggunakan Vanila CSS atau Framework CSS seperti: TailwindCSS, Bootstrap, dll
```

&nbsp;

## Assets 

```md
Font
- font-family: 'Open Sans', sans-serif;

Pallete
-  color: #192c4f; //nightblue
-  color: #fbbf24; //yellow
```

&nbsp;

## Database & Model

Berikut entitas/table, tentukan data type yang tepat untuk attribute/column yang ada

#### Users 
- email
- password 

#### Movies 
- title
- description
- year
- genre
- posterUrl

#### WatchLists
- userId
- movieId
- status

&nbsp;

## List Endpoint Server: 

| method | route                    | description                                                   |
|--------|--------------------------|---------------------------------------------------------------|
| POST   | /register                | Medaftarkan User baru                                         |
| POST   | /login                   | Melakukan login User dengan membuat session                   |
| GET    | /movies                  | Menampilkan daftar Movies yang ada di Database                |
| POST   | /watchlist/:movieId      | Menambahkan Movie ke daftar WatchList                         |
| GET    | /watchlist               | Menampilkan daftar Movies milik User yang sedang login        |
| PATCH  | /watchlist/:watchListId  | Mengupdate status Movie dari `not watched` menjadi `watched`  |

&nbsp;

## Aplikasi
Setup Authentication dan Authorization pada applikasi ini, sebagaimana mestinya


&nbsp;

### **Register**
- Password yang dibuat dan masuk ke database harus sudah terenkripsi.
- Gunakanlah `Validator Sequelize` yang sesuai untuk field-field yang digunakan.
- Kirimkan pesan error di halaman yang sama jika terjadi kesalahan input (Wajib menampilkan pesan error pada UI!).
- Setelah berhasil melakukan Register, pengguna akan diarahkan menuju `/login`

&nbsp;

### **Login**
- Saat Login wajib mengirimkan pesan error ketika email tidak terdaftar dan password salah dengan : `Invalid email/password`
- Setelah berhasil Login wajib membuat session yang berisikan `id` dan `email` dari User.
- User akan diarahkan menuju `/movies` setelah berhasil Login.

&nbsp;

### **Movies** :

menampilkan halaman berisi daftar Movie

- Movie yang ditampilkan wajib berbentuk _card_, buatlah tampilan semirip mungkin dengan yang di demokan. 
- Pada setiap card movie terdapat action button **add to watchlist**

&nbsp;

### **Create Watchlists** :

Menambahkan movieId dari _Movie_ ke daftar _WatchList_ dengan userId dari _User_ yang sedang login
- Setiap WatchList yang dibuat akan memiliki **status** dengan nilai default : `not watched` (manfaatkan hooks)

&nbsp;

### **Watchlists**

menampilkan halaman berisi WatchList dari User

- WatchList yang ditampilkan wajib berbentuk _card_, buatlah tampilan semirip mungkin dengan yang di demokan (Wajib mengimplementasi **Reusable Component**). 
- Jika status pada WatchList adalah `not watched` maka terdapat action button **watch now** yang akan merubah status watchlist.
- Jika status pada WatchList adalah `watched` maka tampilkan text **has been watched**

&nbsp;

### **Update Status Watchlists**

Mengupdate attribute status _Watchlist_ dari `not watched` menjadi `watched`

&nbsp;

### **Logout**
- Fitur logout akan membersihkan localstorage dan User akan secara otomatis diarahkan ke halaman login.

### **Deploy**
- Wajib melakukan deploy applikasi server dan client
