/*

QRIS Dynamic Generator rewritten in Javascript by @bagusok
github: https://github.com/bagusok/QRIS-Dynamic-Generator

Original PHP code by @GidhanB.A
github: https://github.com/verssache/qris-dinamis

*/


export default class QRISGenerator{


    constructor(qrisDecode){
        if (!qrisDecode) throw new Error("QRIS is not defined")
       this.qris = qrisDecode
    }

     generate = (amount) => {
        if(!amount) throw new Error("Amount is not defined")


        const qrisSubstring = this.qris.slice(0, -4)
        const step1 = qrisSubstring.replace("010211", "010212")
        const step2 = step1.split("5802ID")
        let step3 = `54${amount.toString().length.toLocaleString('id-ID', {
            minimumIntegerDigits: 2,
        })}${amount}`

        step3 += '5802ID'
        
        const qrfix = step2[0] + step3 + step2[1]

        return qrfix + this.convertCRC16(qrfix) 
    }

    // convertCRC16 = (str) => {

    //     function dechex (number) {
    //         if (number < 0) {
    //           number = 0xFFFFFFFF + number + 1
    //         }
    //         return parseInt(number, 10)
    //           .toString(16)
    //       }

    //     function charCodeAt(str, i) {
    //        function checkOrd(string) {
    //             const str = string + ''
    //             const code = str.charCodeAt(0)
    //             if (code >= 0xD800 && code <= 0xDBFF) {
    //               const hi = code
    //               if (str.length === 1) {
    //                 return code
    //               }
    //               const low = str.charCodeAt(1)
    //               return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000
    //             }
    //             if (code >= 0xDC00 && code <= 0xDFFF) {
    //               return code
    //             }
    //             return code
    //           }
    //         //   console.log(checkOrd(str.slice(i, 1)+ ' '))
    //         return checkOrd(str.slice(i, 1));
    //     }
    //     let crc = 0xFFFF;
    //     const strlen = str.length;
    //     for(let c = 0; c < strlen; c++) {
    //         crc ^= charCodeAt(str, c) << 8;
    //         for(let i = 0; i < 8; i++) {
    //             if(crc & 0x8000) {
    //                 crc = (crc << 1) ^ 0x1021;
    //             } else {
    //                 crc = crc << 1;
    //             }
              
    //         }
    //     }
    //     console.log(crc)
    //     let hex = crc & 0xFFFF;
    //     hex = dechex(hex).toUpperCase();
    //     if (hex.length == 3) hex = "0" + hex;
    //     return hex;

    // }

    convertCRC16(str) {
        function charCodeAt(str, i) {
            return str.charCodeAt(i);
        }
        
        let crc = 0xFFFF;
        let strlen = str.length;
        for (let c = 0; c < strlen; c++) {
            crc ^= charCodeAt(str, c) << 8;
            
            for (let i = 0; i < 8; i++) {
                if (crc & 0x8000) {
                    crc = (crc << 1) ^ 0x1021;
                } else {
                    crc = crc << 1;
                }
            }
        }
        
        let hex = crc & 0xFFFF;
        hex = hex.toString(16).toUpperCase();
        
        if (hex.length === 3) hex = "0" + hex;
        
        return hex;
    }
    
  

 
}

