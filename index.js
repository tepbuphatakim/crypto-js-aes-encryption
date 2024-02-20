import cryptojs from 'crypto-js';
import readline from 'readline';

const { AES, enc } = cryptojs;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('1. Encrypt.\n2. Decrypt.\nChoose number: ', (option) => {
  if (option == 1) {
    rl.question('Text: ', (text) => {
      rl.question('Key: ', (key) => {
        const cipher = AES.encrypt(text, key).toString();
        console.log('Result cipher:', cipher);
        rl.close();
      });
    });
    return;
  }
  if (option == 2) {
    rl.question('Cipher: ', (cipher) => {
      rl.question('Key: ', (key) => {
        const text = AES.decrypt(cipher, key).toString(enc.Utf8);
        console.log('Result text:', text);
        rl.close();
      });
    });
    return;
  }
  console.log('Invalid input, input 1 or 2.');
  rl.close();
});
