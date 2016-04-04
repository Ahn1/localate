var SHA256 = require("crypto-js/sha256");

export default new class{

  GetPwHash(pw){
    return SHA256(pw);
  }

}
