const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;

    this.matrix = [];
    let alf = [];
    for (let i = 65; i <= 90; i++) {
      alf.push(String.fromCharCode(i));
    }

    for (let l = 0; l < alf.length; l++) {
      this.matrix.push([...alf]);
      alf.push(alf.shift());
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = [];
    const msg = [...message.toUpperCase()];
    const upKey = key.toUpperCase();
    const keyLenght = upKey.length;
    let keyIndex = 0;

    msg.forEach(char => {
      const charIndex = char.charCodeAt() - 65;
      if (charIndex >= 0 && charIndex <= 25) {
        result.push(this.matrix[charIndex][upKey[keyIndex].charCodeAt() - 65]);
        keyIndex++;
        if (keyIndex >= keyLenght) keyIndex = 0;
      } else {
        result.push(char);
      }
    });

    return this._array2str(result);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = [];
    const msg = [...encryptedMessage.toUpperCase()];
    const upKey = key.toUpperCase();
    const keyLenght = upKey.length;
    let keyIndex = 0;

    for (let index = 0; index < msg.length; index++) {
      const encrMsgChar = msg[index];
      if (encrMsgChar >= 'A' && encrMsgChar <= 'Z') {
        result.push(String.fromCharCode(this.matrix[upKey[keyIndex % keyLenght].charCodeAt() - 65].indexOf(encrMsgChar) + 65));
        keyIndex++;
      } else {
        result.push(encrMsgChar);
      }
    }

    return this._array2str(result);
  }

  _array2str(arr) {
    return this.direct ? arr.join('') : arr.reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
