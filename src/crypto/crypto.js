import cryptoJs from "crypto-js";

const secretKey = process.env.SECRET_KEY

export const encryption = (text) => {
    return cryptoJs.AES.encrypt(text, secretKey).toString();
}

export const decryption = (cipher) => {
    const bytes = cryptoJs.AES.decrypt(cipher, secretKey);
    return bytes.toString(cryptoJs.enc.Utf8);
}