var CryptoJS = require("crypto-js");

export default new class{

  GetPwHash(pw){
    return CryptoJS.SHA256(pw).toString(CryptoJS.enc.Base64);
  }

}
