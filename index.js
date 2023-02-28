/*

QRIS Dynamic Generator rewritten in Javascript by @bagusok
github: https://github.com/bagusok/QRIS-Dynamic-Generator

Original PHP code by @GidhanB.A
github: https://github.com/verssache/qris-dinamis

*/


import QRISGenerator from "./lib/QRISGenerator.js"

const qris = new QRISGenerator('00020101021126570011ID.DANA.WWW011893600915302259148102090225914810303UMI51440014ID.CO.QRIS.WWW0215ID10200176114730303UMI5204581253033605802ID5922Warung Sayur Bu Sugeng6010Kab. Demak610559567630458C7')
console.log(qris.generate('12000'))