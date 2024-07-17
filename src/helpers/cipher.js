import forge from 'node-forge';

const util = forge.util, rsa = forge.pki.rsa;

class Cipher {
  #config;

  constructor(config = {}) {
    this.#config = config;
  }

  getConfig() {
    return this.#config;
  }

  encrypt(message = '') {
    return message;
  }

  decrypt(message = '') {
    return message;
  }
}

/**
 * RSA/ECB/OAEPWithSHA-256AndMGF1Padding
 */
class RSACipher extends Cipher {
  #publicKey = null;
  #privateKey = null;

  constructor({
    scheme = 'RSA-OAEP', schemeOptions = {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha1.create()
      }
    },
    modulus = '', publicExponent = '', privateExponent = '',
  }) {
    const mod = new forge.jsbn.BigInteger(util.decode64(modulus));
    const pubExp = new forge.jsbn.BigInteger(util.decode64(publicExponent));
    const priExp = new forge.jsbn.BigInteger(util.decode64(privateExponent));

    super({scheme, schemeOptions, mod, pubExp, priExp});
    this.#publicKey = rsa.setPublicKey(mod, pubExp);
    if (privateExponent) {
      this.#privateKey = rsa.setPrivateKey(mod, pubExp, priExp);
    }
  }

  encrypt(text) {
    const {scheme, schemeOptions} = super.getConfig();
    const message = util.encodeUtf8(text);
    return util.encode64(this.#publicKey.encrypt(message, scheme, schemeOptions));
  }

  decrypt(text) {
    if (!text || !this.#privateKey) {
      return text;
    }

    const message = util.decode64(text);
    const {scheme, schemeOptions} = super.getConfig();
    return this.#privateKey.decrypt(message, scheme, schemeOptions);
  }
}

export {RSACipher as default, Cipher};
