<div align="center">
<h1 style="text-align: center;">QRIS Converter</h1>
<br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/576px-QRIS_logo.svg.png" style="text-align: center; width: 250px;"/>
</div>

<br>

> **QRIS adalah spesifikasi QR Code untuk Sistem Pembayaran Indonesia yang bertujuan untuk Interkoneksi dan Interopabilitas melalui Gerbang Pembayaran Nasional (GPN).**

Adapun 2 tipe dalam QRIS :
- Tipe Statis
- Tipe Dinamis

### Tipe Statis

QRIS Statis adalah sistem pembayaran yang dilakukkan oleh pengguna secara langsung (melakukan scan, masukkan nominal, masukkan PIN dan klik bayar)

### Tipe Dinamis

Qris Dinamis adalah sistem pembayaran yang telah ditentukan oleh Merchant terlebih dahulu, jadi nominal harga sudah tercantum pada QRIS jadi pengguna cukup tinggal scan kemudian bayar

## Cara Penggunaan
```
git clone https://github.com/bagusok/QRIS-Dynamic-Converter
cd QRIS-Dynamic-Converter
npm install
node index.js

```
```javascript

// You must decode QRIS first using QR Scanner
// and then pass it to QRISGenerator
const qris = new QRISGenerator('Your-QRIS')
console.log(qris.generate('Your-Amount')) // 12000 is amount you can change it

```

Thanks to <a href="https://github.com/verssache/qris-dinamis" target="_blank">@verssache</a> for original PHP Script

